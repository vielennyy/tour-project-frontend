import React, { Component } from 'react';
export declare class DraggableList<TData extends {
    id: string | number;
}, TCompProps = Record<string, any>> extends Component<{
    data: TData[];
    component: React.ComponentType<{
        data: TData;
        itemProps?: TCompProps;
    }>;
    onChange?: (data: TData[]) => void;
    itemProps?: TCompProps;
}> {
    private uncontrolledInput;
    private getGridLayout;
    private onLayoutChange;
    render(): JSX.Element;
}
//# sourceMappingURL=DraggableList.d.ts.map