import { TAttribute, TFilteredProductList, TPagedParams, TProduct, TProductCategory, TProductFilter, TProductFilterMeta } from '@cromwell/core';
import { TCGraphQLClient } from '@cromwell/core-frontend';
import { TProductFilterSettings } from '../types';
export declare type TInitialData = {
    attributes?: TAttribute[];
    filterMeta?: TProductFilterMeta;
    productCategory?: TProductCategory;
};
export declare type TProductFilterData = {
    slug?: string | string[] | null;
    pluginSettings?: TProductFilterSettings;
};
export declare const getInitialData: (slug?: string) => Promise<TInitialData>;
export declare const setListProps: (productListId?: string, productCategory?: TProductCategory, client?: TCGraphQLClient | undefined, filterOptions?: TProductFilter, cb?: (data: TFilteredProductList | undefined) => any) => void;
export declare const getFiltered: (client: TCGraphQLClient | undefined, categoryId: number, pagedParams: TPagedParams<TProduct>, filterParams: TProductFilter, cb?: (data: TFilteredProductList | undefined) => void) => Promise<TFilteredProductList | undefined>;
export declare const filterCList: (filterOptions: TProductFilter, productListId: string, productCategory: TProductCategory, client: TCGraphQLClient | undefined, cb: (data: TFilteredProductList | undefined) => void) => void;
//# sourceMappingURL=service.d.ts.map