import { TCustomEntityColumn } from '@cromwell/core';
import { TSavedConfiguredColumn } from '../EntityTable';
export declare type TColumnConfigureItemData = {
    id: string;
    column: TCustomEntityColumn;
    sortedColumns: Record<string, TSavedConfiguredColumn>;
};
export declare const ColumnConfigureItem: (props: {
    data: TColumnConfigureItemData;
}) => JSX.Element;
//# sourceMappingURL=ColumnConfigureItem.d.ts.map