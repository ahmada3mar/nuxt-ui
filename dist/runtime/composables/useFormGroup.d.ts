type InputProps = {
    id?: string;
    size?: string;
    color?: string;
    name?: string;
};
export declare const useFormGroup: (inputProps?: InputProps, config?: any) => {
    inputId: import("vue").ComputedRef<any>;
    name: import("vue").ComputedRef<any>;
    size: import("vue").ComputedRef<any>;
    color: import("vue").ComputedRef<string | undefined>;
    emitFormBlur: () => void;
    emitFormInput: import("@vueuse/shared").PromisifyFn<() => void>;
    emitFormChange: () => void;
};
export {};
