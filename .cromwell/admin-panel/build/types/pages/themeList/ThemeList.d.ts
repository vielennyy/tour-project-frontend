import { TCCSVersion, TCmsSettings, TPackageCromwellConfig, TThemeEntity } from '@cromwell/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
declare class ThemeList extends React.Component<Partial<RouteComponentProps>, {
    isLoading: boolean;
    packages: TPackageCromwellConfig[];
    installedThemes: TThemeEntity[];
    cmsConfig?: TCmsSettings;
    openedTheme?: TPackageCromwellConfig;
    isChangingTheme?: boolean;
    updateModalInfo?: {
        update: TCCSVersion;
        entity: TThemeEntity;
        info: TPackageCromwellConfig;
    } | null;
}> {
    private themeUpdates;
    private themeUnderUpdate;
    private pageRef;
    constructor(props: any);
    componentDidMount(): void;
    private init;
    private checkUpdates;
    private getThemeList;
    private getThemeUpdates;
    private handleSetActiveTheme;
    private handleActivateTheme;
    private handleShowUpdate;
    private startUpdate;
    private handleDelete;
    private handleOpenMarket;
    private openTheme;
    render(): JSX.Element;
}
export default ThemeList;
//# sourceMappingURL=ThemeList.d.ts.map