import { PropsType } from 'react-redux-ts';
import { TAppState } from '../../redux/store';
declare const mapStateToProps: (state: TAppState) => {
    status: import("@cromwell/core").TCmsStatus;
};
declare type TPropsType = PropsType<PropsType, {
    color?: string;
}, ReturnType<typeof mapStateToProps>>;
declare function NotificationCenter(props: TPropsType): JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof NotificationCenter, import("react-redux").Omit<{
    status: import("@cromwell/core").TCmsStatus;
} & Record<string, unknown> & {
    color?: string;
} & {
    setStateProp: (action: {
        prop: string;
        payload: unknown;
    }) => {
        prop: string;
        payload: unknown;
    };
    setStatePropAsync: (action: {
        prop: string;
        func: () => Promise<unknown>;
    }) => {
        prop: string;
        func: () => Promise<unknown>;
    };
}, string> & Record<string, any>>;
export default _default;
//# sourceMappingURL=NotificationCenter.d.ts.map