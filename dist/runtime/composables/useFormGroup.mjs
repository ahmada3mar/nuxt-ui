import { inject, ref, computed } from "vue";
import { useDebounceFn } from "@vueuse/core";
export const useFormGroup = (inputProps, config) => {
  const formBus = inject("form-events", void 0);
  const formGroup = inject("form-group", void 0);
  if (formGroup) {
    formGroup.inputId.value = inputProps?.id ?? formGroup?.inputId.value;
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup?.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup?.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value) {
      emitFormEvent("input", formGroup?.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => inputProps.id ?? formGroup?.inputId.value),
    name: computed(() => inputProps?.name ?? formGroup?.name.value),
    size: computed(() => inputProps?.size ?? formGroup?.size.value ?? config?.default?.size),
    color: computed(() => formGroup?.error?.value ? "red" : inputProps?.color),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
