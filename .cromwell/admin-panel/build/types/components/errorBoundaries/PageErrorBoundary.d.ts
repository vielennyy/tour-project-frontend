import React from 'react';
declare class PageErrorBoundary extends React.Component<unknown, {
    hasError: boolean;
    errorMessage: string;
}> {
    constructor(props: any);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        errorMessage: string;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): React.ReactNode;
}
export default PageErrorBoundary;
//# sourceMappingURL=PageErrorBoundary.d.ts.map