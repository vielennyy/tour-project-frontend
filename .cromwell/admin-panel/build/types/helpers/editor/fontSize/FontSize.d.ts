import { InlineTool } from '@editorjs/editorjs';
export declare class FontSize implements InlineTool {
    private button;
    private _state;
    private api;
    private tag;
    private icon;
    private actions;
    private currentSpan;
    private lastRange;
    private hasShownActions;
    private appliedSize;
    static title: string;
    static get isInline(): boolean;
    get state(): boolean;
    set state(state: boolean);
    constructor({ api }: {
        api: any;
    });
    render(): HTMLButtonElement;
    renderActions(): HTMLDivElement;
    surround(range: Range): void;
    handleSizeChange: (value: number) => void;
    showActions(): void;
    wrap(): void;
    checkState(): boolean;
    hideActions(): void;
    static get sanitize(): {
        span: {
            class: string;
            style: boolean;
        };
    };
    /**
     * Get Tool icon's SVG
     * @return {string}
     */
    get toolboxIcon(): string;
}
//# sourceMappingURL=FontSize.d.ts.map