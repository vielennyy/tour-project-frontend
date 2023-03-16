import { TBasePageEntity } from '@cromwell/core';
import React from 'react';
import { PropsType } from 'react-redux-ts';
import { TAppState } from '../../../../redux/store';
import { TBaseEntityFilter } from '../../types';
import { TListItemProps } from '../EntityTable';
declare const mapStateToProps: (state: TAppState) => {
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
};
declare type TEntityTableItemProps<TEntityType extends TBasePageEntity, TFilterType extends TBaseEntityFilter> = PropsType<PropsType, {
    data?: TEntityType;
    listItemProps: TListItemProps<TEntityType, TFilterType>;
}, ReturnType<typeof mapStateToProps>>;
declare class EntityTableItem<TEntityType extends TBasePageEntity, TFilterType extends TBaseEntityFilter> extends React.Component<TEntityTableItemProps<TEntityType, TFilterType>> {
    private columnRefs;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof EntityTableItem, import("react-redux").Omit<React.ClassAttributes<EntityTableItem<TBasePageEntity, TBaseEntityFilter>> & {
    selectedItems: Record<number, boolean>;
    allSelected: boolean;
} & Record<string, unknown> & {
    data?: TBasePageEntity;
    listItemProps: TListItemProps<TBasePageEntity, TBaseEntityFilter>;
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
//# sourceMappingURL=EntityTableItem.d.ts.map