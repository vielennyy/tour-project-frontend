import { TCromwellBlock, TCromwellBlockData, TCromwellBlockType } from '@cromwell/core';
import React from 'react';
export declare type TPluginBlockOptions = {
    component?: React.ComponentType<{
        block?: TCromwellBlock;
        instanceSettings?: any;
        changeInstanceSettings?: (data: any) => void;
        modifyData?: (data: TCromwellBlockData) => void;
        deleteBlock?: () => void;
        addNewBlockAfter?: (bType: TCromwellBlockType) => void;
        updateFramesPosition?: () => any;
        forceUpdate?: () => void;
    }>;
    pluginName: string;
    blockName: string;
};
export declare const getPluginBlockId: (pluginName: string, blockName: string) => string;
export declare const registerThemeEditorPluginBlock: (options: TPluginBlockOptions) => void;
export declare const onPluginBlockRegister: (callback: (options: TPluginBlockOptions) => any) => void;
export declare const getPluginBlocks: () => TPluginBlockOptions[];
//# sourceMappingURL=registerThemeEditor.d.ts.map