import { TCromwellBlockData, TPageConfig, TPageInfo, TPluginEntity } from '@cromwell/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageBuilder } from './pageBuilder/PageBuilder';
import { ThemeEditActions } from './themeEditActions/ThemeEditActions';
export declare type TExtendedPageInfo = TPageInfo & {
    isSaved?: boolean;
    previewUrl?: string;
};
export declare type TEditorInstances = {
    pageBuilder?: PageBuilder;
    actions?: ThemeEditActions;
    themeEditor?: ThemeEdit;
};
export declare type TExtendedPageConfig = TPageConfig & TExtendedPageInfo;
declare type ThemeEditState = {
    plugins: TPluginEntity[] | null;
    isPageLoading: boolean;
    loadingStatus: boolean;
};
export default class ThemeEdit extends React.Component<Partial<RouteComponentProps>, ThemeEditState> {
    private changedModifications;
    getChangedModifications: () => TCromwellBlockData[];
    private pageBuilderContent;
    private editingPageConfig;
    getEditingPageConfig: () => TExtendedPageConfig;
    setEditingPageConfig: (info: TPageConfig | null) => TPageConfig;
    private instances;
    constructor(props: any);
    componentDidMount(): void;
    init: () => Promise<void>;
    private handlePageModificationsChange;
    pageChangeStart: () => void;
    pageChangeFinish: () => void;
    resetModifications: () => void;
    undoModification: () => void;
    redoModification: () => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ThemeEdit.d.ts.map