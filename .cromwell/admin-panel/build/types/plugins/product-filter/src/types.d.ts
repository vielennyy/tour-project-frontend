import { TFilteredProductList, TProductCategory, TProductFilter } from '@cromwell/core';
export declare type TProductFilterSettings = {
    listId?: string;
    mobileBreakpoint?: number;
    mobileIconPosition?: {
        top: number;
        left: number;
    };
    collapsedByDefault?: boolean;
    mobileCollapsedByDefault?: boolean;
};
export declare type IFrontendFilter = {
    updateFilterMeta: (filteredList: TFilteredProductList | undefined) => void;
    handleMobileOpen: () => any;
    handleMobileClose: () => any;
    setFilter: (filterParams: TProductFilter) => void;
};
export declare type TInstanceSettings = {
    onChange?: (params: TProductFilter) => void;
    disableMobile?: boolean;
    listId?: string;
    getInstance: (inst: IFrontendFilter) => any;
    onMount: (inst: IFrontendFilter) => any;
    /**
     * Custom on category click handler. Return true to
     * skip default handler (navigate to category)
     * */
    onCategoryClick?: (category: TProductCategory) => boolean;
};
//# sourceMappingURL=types.d.ts.map