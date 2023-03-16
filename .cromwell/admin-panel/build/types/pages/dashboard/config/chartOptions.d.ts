import { TSalePerDay } from '@cromwell/core';
export declare const getOrdersPerDayOption: (echarts: any, sales: TSalePerDay[]) => {
    color: string[];
    tooltip: {
        trigger: string;
        axisPointer: {
            type: string;
        };
    };
    grid: {
        left: string;
        right: string;
        bottom: string;
        containLabel: boolean;
    };
    xAxis: {
        type: string;
        data: string[];
        axisTick: {
            alignWithLabel: boolean;
        };
    }[];
    yAxis: {
        minInterval: number;
        type: string;
    }[];
    series: {
        name: string;
        type: string;
        barWidth: string;
        itemStyle: {
            color: any;
        };
        data: number[];
    }[];
};
export declare const getSalesValuePerDayOption: (echarts: any, sales: TSalePerDay[]) => {
    color: string[];
    tooltip: {
        trigger: string;
        axisPointer: {
            type: string;
            label: {
                backgroundColor: string;
            };
        };
    };
    grid: {
        left: string;
        right: string;
        bottom: string;
        containLabel: boolean;
    };
    xAxis: {
        type: string;
        boundaryGap: boolean;
        data: string[];
        axisTick: {
            alignWithLabel: boolean;
        };
    }[];
    yAxis: {
        type: string;
    }[];
    series: {
        name: string;
        type: string;
        smooth: boolean;
        lineStyle: {
            width: number;
        };
        showSymbol: boolean;
        areaStyle: {
            opacity: number;
            color: any;
        };
        emphasis: {
            focus: string;
        };
        data: number[];
    }[];
};
//# sourceMappingURL=chartOptions.d.ts.map