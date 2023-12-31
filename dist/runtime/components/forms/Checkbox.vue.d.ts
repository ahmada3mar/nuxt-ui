import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    value: {
        type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: null;
    };
    modelValue: {
        type: (BooleanConstructor | ArrayConstructor)[];
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
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    indeterminate: {
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
        default: string;
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
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    toggle: import("vue").WritableComputedRef<boolean | unknown[]>;
    inputId: import("vue").ComputedRef<any>;
    name: import("vue").ComputedRef<any>;
    inputClass: import("vue").ComputedRef<string>;
    onChange: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        default: () => string;
    };
    value: {
        type: (ObjectConstructor | BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: null;
    };
    modelValue: {
        type: (BooleanConstructor | ArrayConstructor)[];
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
    checked: {
        type: BooleanConstructor;
        default: boolean;
    };
    indeterminate: {
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
        default: string;
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
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    id: string;
    color: any;
    ui: Partial<any>;
    name: string;
    class: any;
    value: string | number | boolean | Record<string, any>;
    label: string;
    modelValue: boolean | unknown[];
    indeterminate: boolean;
    disabled: boolean;
    required: boolean;
    checked: boolean;
    help: string;
    inputClass: string;
}, {}>;
export default _default;
