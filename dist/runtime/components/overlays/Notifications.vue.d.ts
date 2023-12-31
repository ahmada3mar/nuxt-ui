import type { PropType } from 'vue';
import type { Notification } from '../../types';
declare const _default: import("vue").DefineComponent<{
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}, {
    ui: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    toast: {
        add: (notification: Partial<Notification>) => {
            id: string;
            title?: string | undefined;
            description?: string | undefined;
            icon?: string | undefined;
            avatar?: import("../../types").Avatar | undefined;
            closeButton?: import("../../types").Button | undefined;
            timeout?: number | undefined;
            actions?: import("../../types").NotificationAction[] | undefined;
            click?: Function | undefined;
            callback?: Function | undefined;
            color?: any;
            ui?: any;
        };
        remove: (id: string) => void;
    };
    notifications: any;
    wrapperClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}>>, {
    ui: Partial<any>;
    class: any;
}, {}>;
export default _default;
