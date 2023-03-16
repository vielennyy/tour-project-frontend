import { TSystemUsage } from '@cromwell/core';
export declare const getCpuUsageOption: (echarts: any, loads: TSystemUsage['cpuUsage']['previousLoads']) => {
    color: string[];
    tooltip: {
        trigger: string;
        axisPointer: {
            type: string;
            label: {
                backgroundColor: string;
                formatter: (params: any) => string;
            };
        };
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
        min: number;
        max: number;
        axisLabel: {
            formatter: (val: any) => string;
        };
    }[];
    series: {
        name: string;
        type: string;
        sampling: string;
        smooth: boolean;
        symbol: string;
        itemStyle: {
            color: string;
        };
        areaStyle: {
            color: any;
        };
        data: number[];
    }[];
};
export declare const getPieOption: (title: string, free: number, used: number) => {
    tooltip: {
        formatter: (params: any) => string;
        trigger: string;
    };
    legend: {
        orient: string;
        left: string;
    };
    series: {
        name: string;
        type: string;
        radius: number[];
        avoidLabelOverlap: boolean;
        itemStyle: {
            borderRadius: number;
            borderColor: string;
            borderWidth: number;
        };
        labelLine: {
            show: boolean;
        };
        label: {
            show: boolean;
        };
        data: {
            value: number;
            name: string;
        }[];
    }[];
};
//# sourceMappingURL=chartOptions.d.ts.map