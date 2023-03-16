import { TPalette, TThemeConfig } from '@cromwell/core';
import { History } from 'history';
import React, { Component } from 'react';
import { TEditorInstances, TExtendedPageInfo } from '../ThemeEdit';
export declare class ThemeEditActions extends Component<{
    instances: TEditorInstances;
    history: History;
    undoModification: () => void;
    redoModification: () => void;
}, {
    themePalette?: TPalette;
    themeConfig?: TThemeConfig;
    pageOptionsOpen: boolean;
    pageMetaOpen: boolean;
    loadingStatus: boolean;
    isSidebarOpen: boolean;
    themeSettingsOpen: boolean;
    pageInfos: TExtendedPageInfo[] | null;
}> {
    private optionsAnchorEl;
    private wrapperRef;
    private hasChangedPageInfo;
    private unregisterBlock;
    private unsavedPrompt;
    private changedPalette;
    private themeName;
    undoBtnRef: React.RefObject<HTMLButtonElement>;
    redoBtnRef: React.RefObject<HTMLButtonElement>;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private getThemeEditor;
    hasUnsavedModifications: () => boolean;
    private init;
    private getPageInfos;
    private getThemePalette;
    private getThemeConfig;
    private handleOptionsToggle;
    private handleMetaToggle;
    private handlePagesToggle;
    private handleThemeSettingsToggle;
    private handleAddCustomPage;
    private handlePageInfoChange;
    private handleDeleteCurrentPage;
    private handleDeletePage;
    private handleResetCurrentPage;
    private handleSaveEditingPage;
    private handleOpenPage;
    private undoModification;
    private redoModification;
    private handlePreviewChange;
    private toggleThemeMode;
    render(): JSX.Element;
}
//# sourceMappingURL=ThemeEditActions.d.ts.map