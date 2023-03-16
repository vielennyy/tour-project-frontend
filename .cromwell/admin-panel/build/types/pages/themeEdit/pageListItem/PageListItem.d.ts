import { TPageInfo } from '@cromwell/core';
import { TExtendedPageInfo } from '../ThemeEdit';
export declare const PageListItem: (props: {
    page: TExtendedPageInfo;
    activePage?: TPageInfo;
    handleOpenPage: (page: TPageInfo) => void;
    handleDeletePage: (page: TPageInfo) => void;
    onPreviewChange: (url: string) => any;
}) => JSX.Element;
//# sourceMappingURL=PageListItem.d.ts.map