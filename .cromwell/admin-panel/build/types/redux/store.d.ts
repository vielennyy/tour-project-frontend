import { TCromwellBlock, TThemeConfig, TCmsStatus } from '@cromwell/core';
import { Draggable } from '../helpers/Draggable/Draggable';
export declare type TAppState = {
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
    selectedItem?: number;
    selectedBlock?: TCromwellBlock;
    draggable?: Draggable;
    activeTheme?: TThemeConfig;
    status?: TCmsStatus;
    forceUpdateSidebar?: () => void;
    forceUpdateApp?: () => void;
};
export declare const store: import("redux").Store<TAppState & Record<string, any>, import("react-redux-ts/lib/types").StoreAction<TAppState, import("redux").Action<never>>> & {
    dispatch: import("redux").Dispatch<import("redux").Action<never>>;
} & import("react-redux-ts/lib/types").DispatchHelpers<TAppState>;
export declare type DispatchType = typeof store.dispatch;
export declare type StoreAction = ReturnType<typeof store.dispatch>;
//# sourceMappingURL=store.d.ts.map