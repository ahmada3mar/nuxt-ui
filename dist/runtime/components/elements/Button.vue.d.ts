import type { PropType } from 'vue';
import type { ButtonVariant } from '../../types';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<"sm" | "md" | "xs" | "2xs" | "lg" | "xl">;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<ButtonVariant>;
        default: () => any;
        validator(value: string): boolean;
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
        default: null;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    truncate: {
        type: BooleanConstructor;
        default: boolean;
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
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    isLeading: import("vue").ComputedRef<string | true>;
    isTrailing: import("vue").ComputedRef<string | true>;
    isSquare: import("vue").ComputedRef<boolean>;
    buttonClass: import("vue").ComputedRef<string>;
    leadingIconName: import("vue").ComputedRef<string | undefined>;
    trailingIconName: import("vue").ComputedRef<string | undefined>;
    leadingIconClass: import("vue").ComputedRef<string>;
    trailingIconClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    padded: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<"sm" | "md" | "xs" | "2xs" | "lg" | "xl">;
        default: () => any;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<any>;
        default: () => any;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<ButtonVariant>;
        default: () => any;
        validator(value: string): boolean;
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
        default: null;
    };
    trailing: {
        type: BooleanConstructor;
        default: boolean;
    };
    leading: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    truncate: {
        type: BooleanConstructor;
        default: boolean;
    };
    class: {
        type: PropType<any>;
        default: undefined;
    };
    ui: {
        type: PropType<Partial<any>>;
        default: undefined;
    };
}>>, {
    icon: string;
    color: any;
    ui: Partial<any>;
    class: any;
    label: string;
    type: string;
    loading: boolean;
    disabled: boolean;
    variant: ButtonVariant;
    size: "sm" | "md" | "xs" | "2xs" | "lg" | "xl";
    block: boolean;
    padded: boolean;
    loadingIcon: string;
    leadingIcon: string;
    trailingIcon: string;
    trailing: boolean;
    leading: boolean;
    square: boolean;
    truncate: boolean;
}, {}>;
export default _default;
