import React from 'react';
import { TItemType } from './types';
export declare type ListItemProps = {
    selectedFileName?: string;
    currentPath?: string;
    getItemType: (fileName: string) => TItemType;
    normalize: (fileName: string) => string;
    onItemClick: (itemName: string) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    openPreview: (fileName: string) => void;
};
export declare type TFileItemProps = {
    data: string;
    listItemProps: ListItemProps;
};
export declare const FileItem: (props: TFileItemProps) => JSX.Element;
//# sourceMappingURL=FileItem.d.ts.map