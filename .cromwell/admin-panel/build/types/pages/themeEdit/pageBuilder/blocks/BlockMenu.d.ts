import { TCromwellBlock, TCromwellBlockData, TCromwellBlockType, TPluginEntity } from '@cromwell/core';
import React, { Component } from 'react';
export declare type TBlockMenuProps = {
    block?: TCromwellBlock;
    global?: boolean;
    isGlobalElem: (block: HTMLElement) => boolean;
    getBlockElementById: (typeof import('@cromwell/core-frontend'))['getBlockElementById'];
    modifyData?: (data: TCromwellBlockData) => void;
    deleteBlock?: () => void;
    addNewBlockAfter?: (bType: TCromwellBlockType) => void;
    icon?: JSX.Element;
    menuItems?: JSX.Element | JSX.Element[];
    settingsContent?: React.ReactNode;
    plugins: TPluginEntity[] | null;
    setCanDrag: (canDrag: boolean) => void;
    setCanDeselect: (canDeselect: boolean) => void;
    updateFramesPosition: () => any;
};
export declare class BlockMenu extends Component<{
    getInst: (menu: BlockMenu) => any;
    deselectBlock: (block: HTMLElement) => any;
    createBlockProps: (block: TCromwellBlock) => TBlockMenuProps;
}, {
    addNewOpen: boolean;
}> {
    private selectedFrame;
    private selectedElement;
    private selectedBlock;
    private frameRef;
    addNewBtnEl: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    setSelectedBlock: (frame: HTMLElement, blockElement: HTMLElement, block: TCromwellBlock) => void;
    private handleClose;
    handleCloseAddNew: () => void;
    handleOpenAddNew: () => void;
    render(): JSX.Element;
}
//# sourceMappingURL=BlockMenu.d.ts.map