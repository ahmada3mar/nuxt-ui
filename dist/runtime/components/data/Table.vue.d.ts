import type { PropType } from 'vue';
import type { Button } from '../../types';
declare function defaultComparator<T>(a: T, z: T): boolean;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        default: null;
    };
    by: {
        type: (StringConstructor | FunctionConstructor)[];
        default: () => typeof defaultComparator;
    };
    rows: {
        type: PropType<{
            [key: string]: any;
            click?: Function | undefined;
        }[]>;
        default: () => never[];
    };
    columns: {
        type: PropType<{
            [key: string]: any;
            key: string;
            sortable?: boolean | undefined;
            direction?: "asc" | "desc" | undefined;
            class?: string | undefined;
        }[]>;
        default: null;
    };
    columnAttribute: {
        type: StringConstructor;
        default: string;
    };
    sort: {
        type: PropType<{
            column: string;
            direction: 'asc' | 'desc';
        }>;
        default: () => {};
    };
    sortButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    sortAscIcon: {
        type: StringConstructor;
        default: () => any;
    };
    sortDescIcon: {
        type: StringConstructor;
        default: () => any;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingState: {
        type: PropType<{
            icon: string;
            label: string;
        }>;
        default: () => any;
    };
    emptyState: {
        type: PropType<{
            icon: string;
            label: string;
        }>;
        default: () => any;
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
    sort: import("vue").Ref<{
        direction: string;
        column: string;
    }>;
    columns: import("vue").ComputedRef<{
        [key: string]: any;
        key: string;
        sortable?: boolean | undefined;
        direction?: "asc" | "desc" | undefined;
        class?: string | undefined;
    }[]>;
    rows: import("vue").ComputedRef<{
        [key: string]: any;
        click?: Function | undefined;
    }[]>;
    selected: import("vue").WritableComputedRef<unknown[]>;
    indeterminate: import("vue").ComputedRef<boolean>;
    emptyState: import("vue").ComputedRef<any>;
    loadingState: import("vue").ComputedRef<any>;
    isSelected: (row: any) => boolean;
    onSort: (column: {
        key: string;
        direction?: 'asc' | 'desc';
    }) => void;
    onSelect: (row: any) => void;
    onChange: (event: any) => void;
    getRowData: (row: Object, rowKey: string | string[], defaultValue?: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: null;
    };
    by: {
        type: (StringConstructor | FunctionConstructor)[];
        default: () => typeof defaultComparator;
    };
    rows: {
        type: PropType<{
            [key: string]: any;
            click?: Function | undefined;
        }[]>;
        default: () => never[];
    };
    columns: {
        type: PropType<{
            [key: string]: any;
            key: string;
            sortable?: boolean | undefined;
            direction?: "asc" | "desc" | undefined;
            class?: string | undefined;
        }[]>;
        default: null;
    };
    columnAttribute: {
        type: StringConstructor;
        default: string;
    };
    sort: {
        type: PropType<{
            column: string;
            direction: 'asc' | 'desc';
        }>;
        default: () => {};
    };
    sortButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    sortAscIcon: {
        type: StringConstructor;
        default: () => any;
    };
    sortDescIcon: {
        type: StringConstructor;
        default: () => any;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingState: {
        type: PropType<{
            icon: string;
            label: string;
        }>;
        default: () => any;
    };
    emptyState: {
        type: PropType<{
            icon: string;
            label: string;
        }>;
        default: () => any;
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
    sort: {
        column: string;
        direction: 'asc' | 'desc';
    };
    ui: Partial<any>;
    class: any;
    modelValue: unknown[];
    by: string | Function;
    rows: {
        [key: string]: any;
        click?: Function | undefined;
    }[];
    columns: {
        [key: string]: any;
        key: string;
        sortable?: boolean | undefined;
        direction?: "asc" | "desc" | undefined;
        class?: string | undefined;
    }[];
    columnAttribute: string;
    sortButton: Button;
    sortAscIcon: string;
    sortDescIcon: string;
    loading: boolean;
    loadingState: {
        icon: string;
        label: string;
    };
    emptyState: {
        icon: string;
        label: string;
    };
}, {}>;
export default _default;
