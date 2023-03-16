export declare const getValueView: (value: any) => string;
export declare const getTooltipValueView: (value: any) => string;
/**
 * Support old and new address format
 */
export declare const parseAddress: (address?: string | null) => {
    addressString?: string;
    addressJson?: Record<string, string>;
};
//# sourceMappingURL=addressParser.d.ts.map