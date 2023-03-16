import { TCmsInfo, TCmsSettings } from '@cromwell/core';
import React from 'react';
export declare type TAdminCmsSettings = TCmsSettings & {
    cmsInfo?: TCmsInfo;
    robotsContent?: string;
};
export declare type TTabProps = {
    handleTextFieldChange: (key: keyof TAdminCmsSettings) => (event: React.ChangeEvent<{
        value: string;
    }>) => void;
    changeSettings: (key: keyof TAdminCmsSettings, value: any) => void;
    settings: TAdminCmsSettings | null;
};
declare class SettingsPage extends React.Component<any, {
    settings: TAdminCmsSettings | null;
    isLoading: boolean;
    cmsInfoOpen: boolean;
    expandedItems: Record<string, boolean>;
}> {
    constructor(props: any);
    componentDidMount(): void;
    private changeSettings;
    private getConfig;
    private saveConfig;
    private handleTextFieldChange;
    private makeCategory;
    render(): JSX.Element;
}
export default SettingsPage;
//# sourceMappingURL=Settings.d.ts.map