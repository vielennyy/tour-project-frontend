import { TProductCategory } from '@cromwell/core';
import React from 'react';
import { PropsType } from 'react-redux-ts';
import { TAppState } from '../../redux/store';
import { ListItemProps } from './CategoryList';
export declare type TCategoryItemProps = {
    data: TProductCategory;
    collapsedItemsRef?: React.MutableRefObject<Record<string, boolean>>;
    deletedItemsRef?: React.MutableRefObject<Record<string, boolean>>;
    listItemProps: ListItemProps;
};
declare const mapStateToProps: (state: TAppState) => {
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
    selectedItem: number;
};
declare type TPropsType = PropsType<PropsType, TCategoryItemProps, ReturnType<typeof mapStateToProps>>;
declare const ConnectedComponent: import("react-redux").ConnectedComponent<(props: TPropsType) => JSX.Element, import("react-redux").Omit<{
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
    selectedItem: number;
} & Record<string, unknown> & TCategoryItemProps & {
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
export default ConnectedComponent;
//# sourceMappingURL=CategoryItem.d.ts.map