import { TUser } from '@cromwell/core';
import React from 'react';
import { TSidebarLink } from '../../constants/PageInfos';
declare const SidebarLink: (props: {
    data: TSidebarLink;
    toggleSubMenu: (panel: string) => (event: React.ChangeEvent, isExpanded: boolean) => void;
    expanded: string | false;
    forceUpdate: () => void;
    activeId: string;
    userInfo: TUser | undefined;
}) => JSX.Element;
export default SidebarLink;
//# sourceMappingURL=SidebarLink.d.ts.map