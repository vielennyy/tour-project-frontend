import React from 'react';
export default function TransferList(props: {
    left: string[];
    setLeft: (data: string[]) => void;
    right: string[];
    setRight: (data: string[]) => void;
    itemComp?: React.ComponentType<{
        value: string;
    }>;
}): JSX.Element;
//# sourceMappingURL=TransferList.d.ts.map