import { TProduct } from '@cromwell/core';
import { PropsType } from 'react-redux-ts';
import { TAppState } from '../../redux/store';
export declare type TProductItemProps = {
    data?: TProduct;
    listItemProps: ListItemProps;
    embedded?: boolean;
};
export declare type ListItemProps = {
    handleDeleteProductBtnClick: (product: TProduct) => void;
    toggleSelection: (data: TProduct) => void;
};
declare const mapStateToProps: (state: TAppState) => {
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
};
declare type TPropsType = PropsType<PropsType, TProductItemProps, ReturnType<typeof mapStateToProps>>;
declare const connectedComponent: import("react-redux").ConnectedComponent<(props: TPropsType) => JSX.Element, import("react-redux").Omit<{
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
} & Record<string, unknown> & TProductItemProps & {
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
export default connectedComponent;
//# sourceMappingURL=ProductListItem.d.ts.map