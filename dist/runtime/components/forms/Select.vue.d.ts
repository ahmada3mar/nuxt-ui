import type { PropType, ComputedRef } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (ObjectConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    id: {
        type: StringConstructor;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    leadingIcon: {
        type: StringConstructor;
        default: null;
    };
    trailingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    size: {
        type: PropType<string | number | symbol>;
        default: null;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    optionAttribute: {
        type: StringConstructor;
        default: string;
    };
    valueAttribute: {
        type: StringConstructor;
        default: string;
    };
    selectClass: {
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
    ui: ComputedRef<any>;
    attrs: ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    name: ComputedRef<any>;
    inputId: ComputedRef<any>;
    normalizedOptionsWithPlaceholder: ComputedRef<{
        disabled?: boolean | undefined;
        children: {
            disabled?: boolean;
        }[];
    }[]>;
    normalizedValue: ComputedRef<any>;
    isLeading: ComputedRef<string | true>;
    isTrailing: ComputedRef<string | true | undefined>;
    selectClass: ComputedRef<string>;
    leadingIconName: ComputedRef<string | undefined>;
    leadingIconClass: ComputedRef<string>;
    leadingWrapperIconClass: ComputedRef<string>;
    trailingIconName: ComputedRef<string | undefined>;
    trailingIconClass: ComputedRef<string>;
    trailingWrapperIconClass: ComputedRef<string>;
    onInput: (event: InputEvent) => void;
    onChange: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (ObjectConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    id: {
        type: StringConstructor;
        default: null;
    };
    name: {
        type: StringConstructor;
        default: null;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: StringConstructor;
        default: null;
    };
    loadingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    leadingIcon: {
        type: StringConstructor;
        default: null;
    };
    trailingIcon: {
        type: StringConstructor;
        default: () => any;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    size: {
        type: PropType<string | number | symbol>;
        default: null;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    optionAttribute: {
        type: StringConstructor;
        default: string;
    };
    valueAttribute: {
        type: StringConstructor;
        default: string;
    };
    selectClass: {
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
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    id: string;
    icon: string;
    color: any;
    ui: Partial<any>;
    options: unknown[];
    name: string;
    class: any;
    modelValue: string | number | Record<string, any>;
    loading: boolean;
    disabled: boolean;
    variant: any;
    required: boolean;
    size: string | number | symbol;
    placeholder: string;
    padded: boolean;
    loadingIcon: string;
    leadingIcon: string;
    trailingIcon: string;
    trailing: boolean;
    leading: boolean;
    optionAttribute: string;
    valueAttribute: string;
    selectClass: string;
}, {}>;
export default _default;
