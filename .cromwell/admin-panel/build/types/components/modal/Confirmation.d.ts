import React from 'react';
declare const ConfirmationModal: (props: {
    title: string;
    open: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    disabled?: boolean;
}) => JSX.Element;
export default ConfirmationModal;
export declare const modalStyles: {
    readonly [key: string]: string;
};
export declare class ConfirmPrompt extends React.Component<any, {
    open: boolean;
    title?: string;
}> {
    private confirmResolve;
    constructor(props: any);
    askConfirm: (title?: string) => Promise<boolean>;
    confirmInput: (agree: boolean) => void;
    render(): JSX.Element;
}
export declare const askConfirmation: (options?: {
    title?: string;
}) => Promise<boolean>;
//# sourceMappingURL=Confirmation.d.ts.map