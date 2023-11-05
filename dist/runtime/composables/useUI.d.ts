import type { Ref } from 'vue';
import { Strategy } from '../types';
export declare const useUI: <T>(key: any, $ui: Ref<Partial<T & {
    strategy: Strategy;
}> | undefined>, $config?: T | Ref<T> | undefined, $wrapperClass?: Ref<string>) => {
    ui: import("vue").ComputedRef<T>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
};
