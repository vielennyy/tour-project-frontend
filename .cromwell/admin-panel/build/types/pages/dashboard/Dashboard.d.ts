import { TCmsStats, TProductReview } from '@cromwell/core';
import React from 'react';
export default class Dashboard extends React.Component<any, {
    stats?: TCmsStats;
    reviews: TProductReview[];
}> {
    private contentRef;
    private ordersChart;
    private salesValueChart;
    private cpuUsageChart;
    private echarts;
    private setWidgetSize;
    private widgets;
    componentDidMount(): void;
    private getCmsStats;
    private getReviews;
    private getGridLayout;
    private onLayoutChange;
    render(): JSX.Element;
}
//# sourceMappingURL=Dashboard.d.ts.map