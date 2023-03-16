import { EDBEntity, TAdminCustomField, TBasePageEntity } from '@cromwell/core';
import { SelectProps, TextFieldProps } from '@mui/material';
import React from 'react';
import { GalleryPickerProps } from '../components/galleryPicker/GalleryPicker';
import { ImagePickerProps } from '../components/imagePicker/ImagePicker';
export declare type TRegisteredCustomField = TAdminCustomField & {
    component: React.ComponentType<{
        initialValue: string | undefined;
        entity: TBasePageEntity;
        onChange?: (value: any) => void;
    }>;
    saveData: () => string | Promise<string>;
};
export declare const registerCustomField: (field: TRegisteredCustomField) => void;
export declare const unregisterCustomField: (entityType: string, key: string) => void;
export declare const addOnFieldRegisterEventListener: (id: string, listener: (field: TRegisteredCustomField) => any) => void;
export declare const removeOnFieldRegisterEventListener: (id: string) => void;
export declare const RenderCustomFields: (props: {
    entityType: EDBEntity | string;
    entityData: TBasePageEntity;
    refetchMeta: () => Promise<Record<string, string> | undefined | null>;
    onChange?: (field: TRegisteredCustomField, value: any) => void;
    onDidMount?: () => void;
}) => JSX.Element;
export declare const getCustomMetaFor: (entityType: EDBEntity | string) => Promise<Record<string, string>>;
export declare const getCustomMetaKeysFor: (entityType: EDBEntity | string) => string[];
export declare const getCustomFieldsFor: (entityType: EDBEntity | string) => TRegisteredCustomField[];
export declare const registerSimpleTextCustomField: (settings: {
    entityType: EDBEntity | string;
    key: string;
    label?: string;
    props?: TextFieldProps;
}) => void;
export declare const registerTextEditorCustomField: (settings: {
    entityType: EDBEntity | string;
    key: string;
    label?: string;
    props?: TextFieldProps;
}) => void;
export declare const registerSelectCustomField: (settings: {
    entityType: EDBEntity | string;
    key: string;
    label?: string;
    options?: string[];
    props?: SelectProps<string>;
}) => void;
export declare const registerImageCustomField: (settings: {
    entityType: EDBEntity | string;
    key: string;
    label?: string;
    props?: ImagePickerProps;
}) => void;
export declare const registerGalleryCustomField: (settings: {
    entityType: EDBEntity | string;
    key: string;
    label?: string;
    props?: GalleryPickerProps;
}) => void;
export declare const registerColorCustomField: (settings: {
    entityType: EDBEntity | string;
    key: string;
    label?: string;
    props?: ImagePickerProps;
}) => void;
export declare const registerCustomFieldOfType: (field: TAdminCustomField) => void;
//# sourceMappingURL=customFields.d.ts.map