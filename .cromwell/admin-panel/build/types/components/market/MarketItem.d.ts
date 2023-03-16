import { TCCSModuleInfo, TPackageCromwellConfig } from '@cromwell/core';
export declare type ListItemProps = {
    installedModules: TPackageCromwellConfig[];
    open: (info: TCCSModuleInfo) => any;
    install: (info: TCCSModuleInfo) => Promise<boolean>;
};
declare type PropsType = {
    data?: TCCSModuleInfo;
    listItemProps: ListItemProps;
};
export default function MarketItem(props: PropsType): JSX.Element;
export {};
//# sourceMappingURL=MarketItem.d.ts.map