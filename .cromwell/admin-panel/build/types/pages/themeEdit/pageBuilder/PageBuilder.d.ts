import { TCromwellBlockData, TCromwellBlockType, TPluginEntity } from '@cromwell/core';
import { Component } from 'react';
import { PageBuilderSidebar } from '../pageBuilderSidebar/PageBuilderSidebar';
import { TEditorInstances, TExtendedPageConfig } from '../ThemeEdit';
export declare class PageBuilder extends Component<{
    instances: TEditorInstances;
    editingPageInfo: TExtendedPageConfig;
    plugins: TPluginEntity[] | null;
    onPageModificationsChange: (modifications: TCromwellBlockData[] | null | undefined) => void;
}> {
    private editingFrameRef;
    private editorWidgetWrapper;
    private editorWidgetWrapperCropped;
    private contentWindow;
    private contentStore;
    private contentFrontend;
    private getStoreItem;
    private setStoreItem;
    private getBlockData;
    private getBlockElementById;
    private getBlockById;
    private ignoreDraggableClass;
    private draggable;
    blockInfos: Record<string, {
        canDrag?: boolean;
        canDeselect?: boolean;
    }>;
    private hoveredFrames;
    private selectedFrames;
    private invisibleSelectedFrames;
    private selectedBlock;
    getSelectedBlock: () => HTMLElement;
    private blockMenu;
    private history;
    private undoneHistory;
    private pageBuilderSidebar;
    getSidebar: () => PageBuilderSidebar;
    private selectableFrameMargin;
    private _changedModifications;
    private get changedModifications();
    private set changedModifications(value);
    constructor(props: any);
    componentDidMount(): void;
    init: () => Promise<void>;
    pageChangeStart: () => void;
    pageChangeFinish: () => void;
    updateDraggable: () => void;
    onAnyElementScroll: () => void;
    updateFramesPosition: () => void;
    private onMouseUp;
    canInsertBlock: () => boolean;
    onTryToInsert: (container: HTMLElement, draggedBlock: HTMLElement, shadow?: HTMLElement | null) => void;
    private setFramePosition;
    private createBlockFrame;
    onBlockSelected: (block: HTMLElement) => void;
    onBlockDeSelected: (block: HTMLElement) => void;
    deselectCurrentBlock: () => void;
    deselectBlock: (block: HTMLElement) => void;
    selectBlock: (blockData: TCromwellBlockData) => void;
    onBlockHoverStart: (block: HTMLElement) => void;
    onBlockHoverEnd: (block: HTMLElement) => void;
    canDeselectBlock: (draggedBlock: HTMLElement) => boolean;
    canDragBlock: (draggedBlock: HTMLElement) => boolean;
    getFrameColor: (elem: HTMLElement) => "#ff9100" | "#9900CC";
    private onBlockInserted;
    addBlock: (config: {
        blockData: TCromwellBlockData;
        targetBlockData?: TCromwellBlockData;
        parentData?: TCromwellBlockData;
        position: 'before' | 'after';
    }) => TCromwellBlockData[];
    modifyBlock: (blockData: TCromwellBlockData, saveHist?: boolean) => void;
    /**
   * Saves block into provided array, returns a new array, provided isn't modified
   * @param data
   * @param mods
   */
    private addToModifications;
    saveCurrentState: () => void;
    private getCurrentModificationsState;
    private checkHistoryButtons;
    rerenderBlock(id: string): Promise<void>;
    rerenderBlocks(): Promise<void>;
    undoModification: () => void;
    redoModification: () => void;
    private applyHistory;
    deleteBlock: (blockData: TCromwellBlockData) => Promise<void>;
    createNewBlock: (newBlockType: TCromwellBlockType, afterBlockData: TCromwellBlockData, containerData?: TCromwellBlockData) => Promise<void>;
    private checkBlockDataGlobal;
    private createBlockProps;
    isGlobalElem: (elem?: HTMLElement) => boolean;
    findEditableParent: (elem?: HTMLElement) => HTMLElement | undefined;
    render(): JSX.Element;
}
//# sourceMappingURL=PageBuilder.d.ts.map