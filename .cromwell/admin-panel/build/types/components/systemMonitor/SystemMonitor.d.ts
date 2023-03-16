import { TSystemUsage } from '@cromwell/core';
import React from 'react';
export default class SystemMonitor extends React.Component<{
    open: boolean;
    onClose: () => any;
}, {
    system?: TSystemUsage;
}> {
    private echarts;
    private cpuUsageChart;
    private ramUsageChart;
    private diskUsageChart;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    private onOpen;
    private getSystemUsage;
    render(): JSX.Element;
}
//# sourceMappingURL=SystemMonitor.d.ts.map