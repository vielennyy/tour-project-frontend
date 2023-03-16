import { TBaseFilter, TBasePageEntity, TCustomEntityColumn } from '@cromwell/core';
import React from 'react';
import { PropsType } from 'react-redux-ts';
import { RouteComponentProps } from 'react-router-dom';
import { TAppState } from '../../../redux/store';
import { IEntityListPage, TBaseEntityFilter, TEntityPageProps } from '../types';
declare const mapStateToProps: (state: TAppState) => {
    allSelected: boolean;
};
export declare type TEntityTableProps<TEntityType extends TBasePageEntity, TFilterType extends TBaseEntityFilter> = PropsType<TAppState, TEntityPageProps<TEntityType, TFilterType>, ReturnType<typeof mapStateToProps>> & RouteComponentProps;
export declare type TListItemProps<TEntityType extends TBasePageEntity, TFilterType extends TBaseEntityFilter> = {
    handleDeleteBtnClick: (item: TEntityType) => void;
    toggleSelection?: (item: TEntityType) => void;
    tableProps: TEntityTableProps<TEntityType, TFilterType>;
    getColumns: () => TCustomEntityColumn[];
    getColumnStyles: (column: TCustomEntityColumn, allColumns: TCustomEntityColumn[]) => React.CSSProperties;
};
export declare type TSavedConfiguredColumn = {
    name: string;
    order?: number;
    visible?: boolean;
};
declare class EntityTable<TEntityType extends TBasePageEntity, TFilterType extends TBaseEntityFilter> extends React.Component<TEntityTableProps<TEntityType, TFilterType>, {
    isLoading: boolean;
    deleteSelectedOpen: boolean;
    configureColumnsOpen: boolean;
    columnSearch?: TCustomEntityColumn | null;
}> implements IEntityListPage<TFilterType> {
    private totalElements;
    private listId;
    private configureColumnsButtonRef;
    private configuredColumnsKey;
    private currentSearch;
    sortedColumns: Record<string, TSavedConfiguredColumn>;
    sortBy: {
        column: TCustomEntityColumn;
        sort: 'ASC' | 'DESC';
    } | undefined;
    filters?: TBaseFilter['filters'];
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    resetList: () => void;
    updateList: () => void;
    private handleDeleteItem;
    private handleToggleItemSelection;
    private handleToggleSelectAll;
    private handleDeleteSelected;
    private handleCreate;
    getFilterInput: (tableColumns?: TCustomEntityColumn[]) => TFilterType;
    private getManyFilteredItems;
    getColumns: () => TCustomEntityColumn[];
    getColumnStyles: (column: TCustomEntityColumn, allColumns?: TCustomEntityColumn[]) => React.CSSProperties;
    private toggleConfigureColumns;
    private changeColumnsOrder;
    private saveConfiguredColumns;
    private loadConfiguredColumns;
    private resetConfiguredColumns;
    private toggleOrderBy;
    private openColumnSearch;
    private closeColumnSearch;
    private clearColumnSearch;
    clearAllFilters: () => void;
    private getAutocompleteValueFromSearch;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<React.ComponentClass<Pick<any, string | number | symbol> & {
    wrappedComponentRef?: React.Ref<EntityTable<TBasePageEntity, TBaseEntityFilter>>;
}, any> & import("react-router").WithRouterStatics<typeof EntityTable>, import("react-redux").Omit<React.ClassAttributes<React.Component<Pick<any, string | number | symbol> & {
    wrappedComponentRef?: React.Ref<EntityTable<TBasePageEntity, TBaseEntityFilter>>;
}, any, any>> & Pick<any, string | number | symbol> & {
    wrappedComponentRef?: React.Ref<EntityTable<TBasePageEntity, TBaseEntityFilter>>;
}, string> & Record<string, any>>;
export default _default;
//# sourceMappingURL=EntityTable.d.ts.map