import { TBasePageEntity } from '@cromwell/core';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { TBaseEntityFilter, TEntityPageProps } from '../types';
declare type TEntityEditProps<TEntityType extends TBasePageEntity, TFilterType extends TBaseEntityFilter> = TEntityPageProps<TEntityType, TFilterType> & RouteComponentProps<{
    id: string;
}>;
declare class EntityEdit<TEntityType extends TBasePageEntity, TFilterType extends TBaseEntityFilter> extends React.Component<TEntityEditProps<TEntityType, TFilterType>, {
    entityData?: TEntityType;
    isLoading: boolean;
    notFound: boolean;
    isSaving: boolean;
}> {
    componentDidMount(): void;
    private init;
    private refetchMeta;
    private getEntity;
    private handleInputChange;
    private handleSave;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Pick<TEntityEditProps<TBasePageEntity, TBaseEntityFilter>, keyof TEntityPageProps<TBasePageEntity, TBaseEntityFilter>> & {
    wrappedComponentRef?: React.Ref<EntityEdit<TBasePageEntity, TBaseEntityFilter>>;
}, any> & import("react-router").WithRouterStatics<typeof EntityEdit>;
export default _default;
//# sourceMappingURL=EntityEdit.d.ts.map