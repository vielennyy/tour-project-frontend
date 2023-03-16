import { TProductReview } from '@cromwell/core';
import { PropsType } from 'react-redux-ts';
import { TAppState } from '../../redux/store';
declare type TListItemProps = {
    data?: TProductReview;
    listItemProps: ListItemProps;
    embedded?: boolean;
};
export declare type ListItemProps = {
    handleDeleteBtnClick: (id: number) => void;
    handleOpenReview: (data: TProductReview) => void;
    toggleSelection: (data: TProductReview) => void;
    handleApproveReview: (data: TProductReview) => Promise<boolean>;
};
declare const mapStateToProps: (state: TAppState) => {
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
};
declare type TPropsType = PropsType<PropsType, TListItemProps, ReturnType<typeof mapStateToProps>>;
declare const _default: import("react-redux").ConnectedComponent<(props: TPropsType) => JSX.Element, import("react-redux").Omit<{
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
} & Record<string, unknown> & TListItemProps & {
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
//# sourceMappingURL=ReviewListItem.d.ts.map