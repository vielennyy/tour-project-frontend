import { TPluginSettingsProps } from '@cromwell/core';
import React from 'react';
export default function PluginSettingsLayout<TSettings>(props: TPluginSettingsProps<TSettings> & {
    children: React.ReactNode | ((options: {
        pluginSettings: TSettings | undefined;
        setPluginSettings: (settings: TSettings) => void;
        changeSetting: <T extends keyof TSettings>(key: T, value: TSettings[T]) => void;
        saveSettings: () => Promise<void>;
    }) => JSX.Element);
    disableSave?: boolean;
    loading?: boolean;
    onSave?: (pluginSettings: TSettings) => any | Promise<any>;
}): JSX.Element;
//# sourceMappingURL=PluginSettingsLayout.d.ts.map