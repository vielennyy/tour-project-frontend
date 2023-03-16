import { TCCSVersion, TPackageCromwellConfig, TPluginEntity } from '@cromwell/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
declare class PluginList extends React.Component<Partial<RouteComponentProps>, {
    isLoading: boolean;
    pluginPackages: TPackageCromwellConfig[];
    installedPlugins: TPluginEntity[];
    openedPlugin?: TPackageCromwellConfig;
    updateModalInfo?: {
        update: TCCSVersion;
        plugin: TPluginEntity;
        info: TPackageCromwellConfig;
    } | null;
}> {
    private pluginUpdates;
    private pluginsUnderUpdate;
    private pageRef;
    constructor(props: any);
    componentDidMount(): void;
    private init;
    private checkUpdates;
    private getPluginList;
    private getPluginUpdates;
    private handleOpenPluginPage;
    private handleDeletePlugin;
    private handleActivatePlugin;
    private handleOpenMarket;
    private handleShowUpdate;
    private startUpdate;
    render(): JSX.Element;
}
export default PluginList;
//# sourceMappingURL=PluginList.d.ts.map