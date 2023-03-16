import { TProductCategory } from '@cromwell/core';
import { PropsType } from 'react-redux-ts';
import { TAppState } from '../../redux/store';
export declare type ListItemProps = {
    handleDeleteBtnClick: (product: TProductCategory) => void;
    toggleSelection?: (data: TProductCategory) => void;
    displayType: 'tree' | 'list';
    embeddedView?: boolean;
};
declare const mapStateToProps: (state: TAppState) => {
    allSelected: boolean;
};
declare type TPropsType = PropsType<TAppState, {
    embeddedView?: boolean;
}, ReturnType<typeof mapStateToProps>>;
declare const _default: import("react-redux").ConnectedComponent<(props: TPropsType) => JSX.Element, import("react-redux").Omit<{
    allSelected: boolean;
} & Record<string, unknown> & {
    embeddedView?: boolean;
} & {
    setStateProp: (action: import("react-redux-ts/lib/types").DispatchActionSync<TAppState>) => import("react-redux-ts/lib/types").DispatchActionSync<TAppState>;
    setStatePropAsync: (action: import("react-redux-ts/lib/types").DispatchActionAsync<TAppState>) => import("react-redux-ts/lib/types").DispatchActionAsync<TAppState>;
}, string> & Record<string, any>>;
export default _default;
//# sourceMappingURL=CategoryList.d.ts.map