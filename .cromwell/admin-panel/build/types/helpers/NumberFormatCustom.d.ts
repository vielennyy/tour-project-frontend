import React from 'react';
import NumberFormat from 'react-number-format';
export interface NumberFormatCustomProps {
    onChange: (event: {
        target: {
            name: string;
            value: string;
        };
    }) => void;
    name: string;
}
export declare const NumberFormatCustom: React.ForwardRefExoticComponent<NumberFormatCustomProps & React.RefAttributes<NumberFormat>>;
//# sourceMappingURL=NumberFormatCustom.d.ts.map