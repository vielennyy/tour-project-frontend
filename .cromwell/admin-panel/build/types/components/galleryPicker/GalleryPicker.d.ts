import { TImageSettings } from '@cromwell/core';
import React, { Component } from 'react';
import { ImagePickerProps } from '../imagePicker/ImagePicker';
export declare type GalleryPickerProps = {
    images?: TImageSettings[];
    onChange?: (images: TImageSettings[]) => void;
    classes?: {
        imagePicker?: ImagePickerProps['classes'];
    };
    className?: string;
    label?: string;
    hideSrc?: boolean;
    editLink?: boolean;
    style?: React.CSSProperties;
};
export declare class GalleryPicker extends Component<GalleryPickerProps, {
    editableLink?: number;
    editableLinkText: string | undefined;
}> {
    private uncontrolledInput;
    private editableLinkRef;
    private onImageChange;
    private handleAddImage;
    private handleRemoveImage;
    private handleDeleteAllImages;
    private handleShowLink;
    private handleChangeImageLink;
    private handleCloseLinkEdit;
    private onLayoutChange;
    private getGridLayout;
    render(): JSX.Element;
}
//# sourceMappingURL=GalleryPicker.d.ts.map