import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    value: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: null;
    };
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: StringConstructor;
        default: null;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): any;
    };
    inputClass: {
        type: StringConstructor;
        default: null;
    };
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
    inputId: import("vue").ComputedRef<any>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    pick: import("vue").WritableComputedRef<string | number | boolean | Record<string, any>>;
    name: import("vue").ComputedRef<any>;
    inputClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    value: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: null;
    };
    modelValue: {
        type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    help: {
        type: StringConstructor;
        default: null;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): any;
    };
    inputClass: {
        type: StringConstructor;
        default: null;
    };
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    id: string;
    color: any;
    ui: Partial<any>;
    name: string;
    class: any;
    value: string | number | boolean;
    label: string;
    modelValue: string | number | boolean | Record<string, any>;
    disabled: boolean;
    required: boolean;
    help: string;
    inputClass: string;
}, {}>;
export default _default;
