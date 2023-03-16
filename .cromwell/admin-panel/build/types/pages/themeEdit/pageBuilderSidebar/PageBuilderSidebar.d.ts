import { TCromwellBlock } from '@cromwell/core';
import React from 'react';
import { Draggable } from '../../../helpers/Draggable/Draggable';
import { TBlockMenuProps } from '../pageBuilder/blocks/BlockMenu';
declare type PageBuilderSidebarProps = {
    createBlockProps: (block: TCromwellBlock) => TBlockMenuProps;
    draggable?: Draggable;
    getInst: (menu: PageBuilderSidebar) => any;
    deselectBlock: (block: HTMLElement) => any;
};
export declare class PageBuilderSidebar extends React.Component<PageBuilderSidebarProps> {
    private selectedElement;
    private selectedBlock;
    getSelectedBlock: () => TCromwellBlock<React.Component<import("@cromwell/core").TCromwellBlockProps<React.Component<{}, {}, any>>, {}, any>>;
    constructor(props: any);
    setSelectedBlock: (target: HTMLElement, block: TCromwellBlock) => void;
    private handleClose;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=PageBuilderSidebar.d.ts.map