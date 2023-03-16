import { TCCSModuleInfo, TPackageCromwellConfig } from '@cromwell/core';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
export default class PluginMarket extends Component<Partial<RouteComponentProps>, {
    installedPlugins: TPackageCromwellConfig[];
    isLoading: boolean;
    openedPlugin?: TCCSModuleInfo;
}> {
    private listId;
    private filterInput;
    constructor(props: any);
    componentDidMount(): void;
    private init;
    private getPluginList;
    loadList: (props: any) => Promise<import("@cromwell/core").TPagedList<TCCSModuleInfo>>;
    openPlugin: (info: TCCSModuleInfo) => void;
    installPlugin: (info: TCCSModuleInfo | TPackageCromwellConfig) => Promise<boolean>;
    private resetList;
    private handleFilterInput;
    render(): JSX.Element;
}
//# sourceMappingURL=PluginMarket.d.ts.map