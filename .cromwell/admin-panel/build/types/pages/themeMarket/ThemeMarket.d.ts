import { TCCSModuleInfo, TPackageCromwellConfig } from '@cromwell/core';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
export default class ThemeMarket extends Component<Partial<RouteComponentProps>, {
    installedThemes: TPackageCromwellConfig[];
    isLoading: boolean;
    openedTheme?: TCCSModuleInfo;
}> {
    private listId;
    private filterInput;
    constructor(props: any);
    componentDidMount(): void;
    private init;
    private getThemeList;
    loadList: (props: any) => Promise<import("@cromwell/core").TPagedList<TCCSModuleInfo>>;
    openTheme: (info: TCCSModuleInfo) => void;
    installTheme: (info: TCCSModuleInfo | TPackageCromwellConfig) => Promise<boolean>;
    private resetList;
    private handleFilterInput;
    render(): JSX.Element;
}
//# sourceMappingURL=ThemeMarket.d.ts.map