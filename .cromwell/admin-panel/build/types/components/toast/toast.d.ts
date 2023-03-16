import { TCromwellNotify } from '@cromwell/core';
import React from 'react';
import { ToastOptions } from 'react-toastify';
declare class Toast implements TCromwellNotify {
    success(text: string, options?: ToastOptions): React.ReactText;
    warning(text: string, options?: ToastOptions): React.ReactText;
    error(text: string, options?: ToastOptions): React.ReactText;
    info(text: string, options?: ToastOptions): React.ReactText;
    POSITION: {
        TOP_LEFT: import("react-toastify").ToastPosition;
        TOP_RIGHT: import("react-toastify").ToastPosition;
        TOP_CENTER: import("react-toastify").ToastPosition;
        BOTTOM_LEFT: import("react-toastify").ToastPosition;
        BOTTOM_RIGHT: import("react-toastify").ToastPosition;
        BOTTOM_CENTER: import("react-toastify").ToastPosition;
    };
    warn: (text: string, options?: ToastOptions) => React.ReactText;
    dismiss: (id?: string | number) => void;
}
export declare const toast: Toast;
export {};
//# sourceMappingURL=toast.d.ts.map