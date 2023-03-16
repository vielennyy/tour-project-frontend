import React from 'react';
declare class FramePortal extends React.Component<{
    setIframe?: (iframe: HTMLIFrameElement) => void;
    className?: string;
    id?: string;
}> {
    private containerEl;
    private iframe;
    constructor(props: any);
    render(): JSX.Element;
    componentDidMount(): void;
}
export default FramePortal;
//# sourceMappingURL=FramePortal.d.ts.map