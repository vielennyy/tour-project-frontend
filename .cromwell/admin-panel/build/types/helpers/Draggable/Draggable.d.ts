export declare type TDraggableOptions = {
    /**
     * CSS selector of blocks that can be dragged
     */
    draggableSelector: string;
    /**
     * CSS selector where draggable blocks can be placed
     */
    containerSelector: string;
    /**
     * DOM element inside of which Draggable works. Used to insert draggable elements.
     * Will use "body" tag by default if no elem specified.
     */
    rootElement?: HTMLElement;
    rootElementSelector?: string;
    /**
     * How to display element at the new place during dragging. Create a preview element
     * cloning dragging one (will have impact on a layout which may lead to twitching)
     * or just show an underline at the new place.
     */
    dragPlacement?: 'element' | 'underline';
    onBlockInserted?: (container: HTMLElement, draggedBlock: HTMLElement, nextElement?: Element | null) => void;
    onTryToInsert?: (container: HTMLElement, draggedBlock: HTMLElement, shadow?: HTMLElement | null, nextElement?: Element | null) => void;
    canInsertBlock?: (container: HTMLElement, draggedBlock: HTMLElement, nextElement?: Element | null) => boolean;
    onBlockSelected?: (draggedBlock: HTMLElement) => void;
    onBlockDeSelected?: (draggedBlock: HTMLElement) => void;
    onBlockHoverStart?: (draggedBlock: HTMLElement) => void;
    onBlockHoverEnd?: (draggedBlock: HTMLElement) => void;
    canDeselectBlock?: (draggedBlock: HTMLElement) => boolean;
    canDragBlock?: (draggedBlock: HTMLElement) => boolean;
    getFrameColor?: (block: HTMLElement) => string;
    ignoreDraggableClass?: string;
    /**
     * Disable actual DOM insert of elements into new positions? If true, will
     * be used in "preview" mode and it'll create only block's shadows at new positions and remove
     * them at mouseUp event, so no modification will be applied to the DOM at the end
     * of a drag action.
     * Use it to prevent React errors, since React must manage its elements by itself.
     * In this case handle insertion manually via onBlockInserted prop.
     */
    disableInsert?: boolean;
    /**
     * Color of frames
     */
    primaryColor?: string;
    /** Create a new draggable frame or find inside a block */
    createFrame?: boolean;
    draggableFrameClass?: string;
    /** Custom document to work on (e.g. in iframe) */
    document?: typeof document;
    iframeSelector?: string;
    disableClickAwayDeselect?: boolean;
    applyZIndex?: boolean;
};
export declare class Draggable {
    private draggingBlock;
    private draggingCursor;
    private hoveredBlock;
    private selectedBlock;
    private draggingBlockShadow;
    private draggableBlocks;
    private containers;
    private canDragBlock;
    private isDragging;
    private options;
    private document;
    private onMouseDownInfo;
    private onDragStartInfo;
    private lastInsertionData;
    static draggableFrameClass: string;
    static draggableBlockClass: string;
    static draggableFrameHoveredCSSclass: string;
    static draggableFrameSelectedCSSclass: string;
    static draggingClass: string;
    static cursorClass: string;
    private canInsertBlock?;
    private onBlockInserted?;
    constructor(options: TDraggableOptions);
    setupDraggableBlocks: (options: TDraggableOptions) => void;
    setOptions(options: TDraggableOptions): void;
    private setupBlock;
    private clearBlock;
    updateBlocks: () => void;
    onMouseUp: () => void;
    private onBlockMouseDown;
    private onDragStart;
    private onMouseMove;
    private tryToInsert;
    private getDragAfterElement;
    private onDragStop;
    private onHoverStart;
    private onHoverEnd;
    private blockHoverEnd;
    private onBlockClick;
    private onPageBodyClick;
    deselectCurrentBlock: () => boolean;
    private styleHoveredBlock;
    private styleSelectedBlock;
    private styleDeselectedBlock;
}
//# sourceMappingURL=Draggable.d.ts.map