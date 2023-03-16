import React from 'react';
export declare type ImagePickerProps = {
    toolTip?: string;
    placeholder?: string;
    label?: string;
    width?: string | number;
    height?: string | number;
    onChange?: (value: string | undefined) => void;
    value?: string | null;
    className?: string;
    backgroundSize?: 'contain' | 'cover' | string;
    showRemove?: boolean;
    hideSrc?: boolean;
    classes?: {
        image?: string;
        root?: string;
    };
    style?: React.CSSProperties;
    variant?: 'standard';
};
export declare const ImagePicker: (props: ImagePickerProps) => JSX.Element;
//# sourceMappingURL=ImagePicker.d.ts.map