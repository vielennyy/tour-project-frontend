import { API, BlockAPI, OutputData } from '@editorjs/editorjs';
export declare const initTextEditor: (options: {
    htmlId: string;
    placeholder?: string;
    data?: any;
    autofocus?: boolean;
    onChange?: (api: API, block: BlockAPI) => any;
}) => Promise<void>;
export declare const getEditorHtml: (htmlId: string, data?: OutputData) => Promise<string>;
export declare const getEditorData: (htmlId: string) => Promise<OutputData | undefined>;
export declare const destroyEditor: (htmlId: string) => Promise<void>;
//# sourceMappingURL=editor.d.ts.map