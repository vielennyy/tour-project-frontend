import { TPagedList, TPagedParams } from '@cromwell/core';
import React from 'react';
declare class Autocomplete<TItemData extends {
    id: number | string;
}> extends React.Component<{
    loader: (search: string, params?: TPagedParams<TItemData>) => Promise<(TPagedList<TItemData> | TItemData[]) | undefined>;
    itemComponent?: (props: {
        data: TItemData;
    }) => JSX.Element;
    getOptionLabel: (data: TItemData) => string;
    getOptionValue?: (data: TItemData) => string;
    onSelect?: (data: TItemData | TItemData[] | null) => void;
    className?: string;
    fullWidth?: boolean;
    defaultValue?: TItemData | TItemData[];
    label?: string;
    variant?: 'standard' | 'outlined' | 'filled';
    multiple?: boolean;
}, {
    searchOpen?: boolean;
    isLoading: boolean;
    searchItems?: TItemData[];
    searchText?: string;
    pickedText?: string;
    pickedItems?: string[];
    defaultValue?: TItemData | TItemData[];
}> {
    private searchAnchorRef;
    private listId;
    private listSkeleton;
    private pickedData;
    constructor(props: any);
    private setDefaultValue;
    componentDidMount(): void;
    componentDidUpdate(): void;
    private fetchItems;
    private searchRequest;
    private loadMore;
    private handleSearchInput;
    private handleSearchClose;
    private handleItemClick;
    private multiSelectionListeners;
    addMultiSelectListener: (id: string, listener: (pickedItems: string[]) => any) => void;
    removeMultiSelectListener: (id: string) => void;
    private handleClear;
    render(): JSX.Element;
}
export default Autocomplete;
//# sourceMappingURL=Autocomplete.d.ts.map