import { TImageSettings } from '@cromwell/core';
import { ImagePickerProps } from '../imagePicker/ImagePicker';
export declare const ImageItem: (props: {
    itemProps: {
        onImageChange: (index: number, value: TImageSettings | null) => void;
        classes: ImagePickerProps['classes'];
        allImages: TImageSettings[];
    };
    data: TImageSettings;
    draggableHandleClass: string;
    hideSrc?: boolean;
}) => JSX.Element;
//# sourceMappingURL=ImageItem.d.ts.map