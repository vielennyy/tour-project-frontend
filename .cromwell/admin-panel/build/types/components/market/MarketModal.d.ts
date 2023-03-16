import { TCCSModuleInfo, TPackageCromwellConfig } from '@cromwell/core';
export default function MarketModal(props: {
    data: TCCSModuleInfo | TPackageCromwellConfig;
    installedModules?: TPackageCromwellConfig[];
    noInstall?: boolean;
    install?: (info: TCCSModuleInfo | TPackageCromwellConfig) => Promise<boolean>;
}): JSX.Element;
//# sourceMappingURL=MarketModal.d.ts.map