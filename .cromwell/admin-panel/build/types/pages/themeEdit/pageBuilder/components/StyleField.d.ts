import { TCromwellBlockData } from '@cromwell/core';
import React from 'react';
export declare function StyleField(props: {
    dataType: 'px' | 'string' | 'color' | 'select';
    handleStyleChange: (name: keyof React.CSSProperties, value: any) => void;
    data: TCromwellBlockData;
    name: keyof React.CSSProperties;
    label: string;
    className?: string;
    style?: React.CSSProperties;
    options?: string[];
}): JSX.Element;
//# sourceMappingURL=StyleField.d.ts.map