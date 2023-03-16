import { TPageInfo, TSidebarLink } from '../constants/PageInfos';
export declare const registerPageInfoModifier: (key: string, modifier: (infos: TPageInfo[]) => TPageInfo[]) => void;
export declare const registerSidebarLinkModifier: (key: string, modifier: (links: TSidebarLink[]) => TSidebarLink[]) => void;
export declare const getPageInfos: () => TPageInfo[];
export declare const getSideBarLinks: () => TSidebarLink[];
export declare const getLinkByInfo: (pageInfo: TPageInfo) => TSidebarLink & {
    parentId?: string;
};
//# sourceMappingURL=navigation.d.ts.map