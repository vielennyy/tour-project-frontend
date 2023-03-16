import React from 'react';
import { PropsType } from 'react-redux-ts';
declare const _default: import("react-redux").ConnectedComponent<(props: PropsType<PropsType<Record<string, unknown>, Record<string, unknown>, Record<string, unknown>, Record<string, unknown>>, {
    onClick: () => void;
    style?: React.CSSProperties;
    totalElements?: number;
}, {
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
}, Record<string, unknown>>) => JSX.Element, import("react-redux").Omit<{
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
} & Record<string, unknown> & {
    onClick: () => void;
    style?: React.CSSProperties;
    totalElements?: number;
} & {
    setStateProp: (action: {
        prop: string;
        payload: unknown;
    }) => {
        prop: string;
        payload: unknown;
    };
    setStatePropAsync: (action: {
        prop: string;
        func: () => Promise<unknown>;
    }) => {
        prop: string;
        func: () => Promise<unknown>;
    };
}, string> & Record<string, any>>;
export default _default;
//# sourceMappingURL=DeleteSelectedButton.d.ts.map