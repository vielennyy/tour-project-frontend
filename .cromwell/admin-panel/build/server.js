'use strict';

var core = require('@cromwell/core');
var coreBackend = require('@cromwell/core-backend');
var coreFrontend = require('@cromwell/core-frontend');
var compress = require('compression');
var fastify = require('fastify');
var fastifyStatic = require('fastify-static');
var fs = require('fs-extra');
var middie = require('middie');
var normalizePath = require('normalize-path');
var path = require('path');
var symlinkDir = require('symlink-dir');
var yargs = require('yargs-parser');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var compress__default = /*#__PURE__*/_interopDefaultLegacy(compress);
var fastify__default = /*#__PURE__*/_interopDefaultLegacy(fastify);
var fastifyStatic__default = /*#__PURE__*/_interopDefaultLegacy(fastifyStatic);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var middie__default = /*#__PURE__*/_interopDefaultLegacy(middie);
var normalizePath__default = /*#__PURE__*/_interopDefaultLegacy(normalizePath);
var symlinkDir__default = /*#__PURE__*/_interopDefaultLegacy(symlinkDir);
var yargs__default = /*#__PURE__*/_interopDefaultLegacy(yargs);

const start = async () => {
    var _a, _b;
    const args = yargs__default['default'](process.argv.slice(2));
    if (args.serverUrl) {
        process.env.API_URL = args.serverUrl;
    }
    let cmsSettings = coreBackend.readCMSConfigSync();
    core.setStoreItem('cmsSettings', cmsSettings);
    try {
        cmsSettings = (_a = await coreFrontend.getRestApiClient().getCmsSettings()) !== null && _a !== void 0 ? _a : cmsSettings;
        core.setStoreItem('cmsSettings', cmsSettings);
    }
    catch (error) {
        console.error(error);
    }
    const env = process.argv[2];
    const isProduction = env === 'production' || env === 'prod';
    const isDevelopment = env === 'development' || env === 'dev';
    if (!isDevelopment && !isProduction)
        throw (`devServer::startDevServer: process.argv[2] is invalid - ${env} valid values - "development" and "production"`);
    const projectPublicDir = normalizePath__default['default'](coreBackend.getPublicDir());
    const publicDir = normalizePath__default['default'](coreBackend.getAdminPanelWebPublicDir());
    const webTempDir = normalizePath__default['default'](coreBackend.getAdminPanelTempDir());
    const adminPanelStaticDir = normalizePath__default['default'](coreBackend.getAdminPanelStaticDir());
    if (!fs__default['default'].existsSync(webTempDir))
        await fs__default['default'].ensureDir(webTempDir);
    // Link public dir in project root to admin panel temp public dir for Fastify web server
    if (!fs__default['default'].existsSync(publicDir) && fs__default['default'].existsSync(projectPublicDir)) {
        await symlinkDir__default['default'](projectPublicDir, publicDir);
    }
    // Link service build dir
    const serviceBuildDir = coreBackend.getAdminPanelServiceBuildDir();
    const webTempServiceLink = coreBackend.getAdminPanelWebServiceBuildDir();
    if (!fs__default['default'].existsSync(webTempServiceLink) && fs__default['default'].existsSync(serviceBuildDir)) {
        await symlinkDir__default['default'](serviceBuildDir, webTempServiceLink);
    }
    // Link bundled modules dir
    const bundledModulesDir = coreBackend.getBundledModulesDir();
    const bundledLocalLink = path.resolve(webTempDir, core.bundledModulesDirName);
    if (!fs__default['default'].existsSync(bundledLocalLink) && fs__default['default'].existsSync(bundledModulesDir)) {
        await symlinkDir__default['default'](bundledModulesDir, bundledLocalLink);
    }
    const port = (_b = args.port) !== null && _b !== void 0 ? _b : 4064;
    const app = fastify__default['default']();
    await app.register(middie__default['default']);
    if (isDevelopment) {
        const webpack = require('webpack');
        const webpackConfig = require('../webpack.config');
        const chalk = require('react-dev-utils/chalk');
        const compiler = webpack(webpackConfig);
        compiler.hooks.watchRun.tap('adminPanelStart', () => {
            console.log(chalk.cyan('\r\nBegin admin panel compile at ' + new Date() + '\r\n')); // eslint-disable-line
        });
        compiler.hooks.done.tap('adminPanelDone', () => {
            setTimeout(() => {
                console.log(chalk.cyan('\r\nEnd admin panel compile at ' + new Date() + '\r\n')); // eslint-disable-line
            }, 100);
        });
        compiler.watch({}, (err, stats) => {
            if (err)
                console.error(err);
            console.log(stats === null || stats === void 0 ? void 0 : stats.toString({
                chunks: false,
                colors: true
            }));
        });
        // app.use(require("webpack-dev-middleware")(compiler, {
        //     publicPath: webpackConfig.output.publicPath
        // }));
        // app.use(require("webpack-hot-middleware")(compiler));
    }
    app.use(compress__default['default']());
    app.register(fastifyStatic__default['default'], {
        root: publicDir,
    });
    app.register(fastifyStatic__default['default'], {
        root: webTempDir + '/bundled-modules',
        prefix: '/bundled-modules/',
        decorateReply: false,
    });
    app.register(fastifyStatic__default['default'], {
        root: adminPanelStaticDir,
        prefix: '/admin/static/',
        decorateReply: false,
    });
    app.register(fastifyStatic__default['default'], {
        root: webTempDir + '/build',
        prefix: '/admin/build/',
        decorateReply: false,
    });
    const indexPageHandle = (req, res) => {
        // route requested, send index.html
        const files = fs__default['default'].readdirSync(webTempDir + '/build');
        const webapp = files.find(file => file.startsWith('webapp') && file.endsWith('.js'));
        res.type('text/html').send(`
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="shortcut icon" type="image/png" href="/admin/static/icon_small.png"/>
            <title>Cromwell CMS Admin Panel</title>
            <script>
            CromwellStore = {
                cmsSettings: ${JSON.stringify(cmsSettings)},
                environment: {
                    isAdminPanel: true,
                    mode: '${isDevelopment ? 'dev' : 'prod'}'
                }
            }
            </script>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap" rel="stylesheet">
        </head>

        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
            <script src="/admin/build/${webapp}"></script>
        </body>
        `);
    };
    app.get(`/admin`, indexPageHandle);
    app.get(`/admin/`, indexPageHandle);
    app.get(`/admin/*`, indexPageHandle);
    await app.listen(port, '::', 1, (err) => {
        if (err) {
            console.error(err);
            if (process.send)
                process.send(coreBackend.adminPanelMessages.onStartErrorMessage);
        }
        else {
            if (process.send)
                process.send(coreBackend.adminPanelMessages.onStartMessage);
        }
    });
};
try {
    start();
}
catch (e) {
    console.error(e);
    if (process.send)
        process.send(coreBackend.adminPanelMessages.onStartErrorMessage);
}
