import { TAdminCustomEntity, TCustomEntityColumn } from '@cromwell/core';
import { TPageInfo, TSidebarLink } from '../constants/PageInfos';
export declare const registerCustomEntity: (options: TAdminCustomEntity) => void;
export declare const unregisterCustomEntity: (entityType: string) => void;
export declare const getCustomEntities: () => TAdminCustomEntity[];
export declare const getCustomEntityPages: () => TPageInfo[];
export declare const getCustomEntitySidebarLinks: () => TSidebarLink[];
export declare const baseEntityColumns: TCustomEntityColumn[];
//# sourceMappingURL=customEntities.d.ts.map