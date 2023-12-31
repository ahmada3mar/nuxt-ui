<template>
  <HSwitch
    :id="inputId"
    v-model="active"
    :name="name"
    :disabled="disabled"
    :class="switchClass"
    v-bind="attrs"
  >
    <span :class="[active ? ui.container.active : ui.container.inactive, ui.container.base]">
      <span v-if="onIcon" :class="[active ? ui.icon.active : ui.icon.inactive, ui.icon.base]" aria-hidden="true">
        <UIcon :name="onIcon" :class="onIconClass" />
      </span>
      <span v-if="offIcon" :class="[active ? ui.icon.inactive : ui.icon.active, ui.icon.base]" aria-hidden="true">
        <UIcon :name="offIcon" :class="offIconClass" />
      </span>
    </span>
  </HSwitch>
</template>

<script>
import { computed, toRef, defineComponent } from "vue";
import { Switch as HSwitch } from "@headlessui/vue";
import { twMerge, twJoin } from "tailwind-merge";
import UIcon from "../elements/Icon.vue";
import { useUI } from "../../composables/useUI";
import { useFormGroup } from "../../composables/useFormGroup";
import { mergeConfig } from "../../utils";
import appConfig from "#build/app.config";
import { toggle } from "#ui/ui.config";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.toggle, toggle);
export default defineComponent({
  components: {
    HSwitch,
    UIcon
  },
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onIcon: {
      type: String,
      default: () => config.default.onIcon
    },
    offIcon: {
      type: String,
      default: () => config.default.offIcon
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return appConfig.ui.colors.includes(value);
      }
    },
    class: {
      type: [String, Object, Array],
      default: void 0
    },
    ui: {
      type: Object,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("toggle", toRef(props, "ui"), config);
    const { emitFormChange, color, inputId, name } = useFormGroup(props);
    const active = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
        emitFormChange();
      }
    });
    const switchClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.ring.replaceAll("{color}", color.value),
        (active.value ? ui.value.active : ui.value.inactive).replaceAll("{color}", color.value)
      ), props.class);
    });
    const onIconClass = computed(() => {
      return twJoin(
        ui.value.icon.on.replaceAll("{color}", color.value)
      );
    });
    const offIconClass = computed(() => {
      return twJoin(
        ui.value.icon.off.replaceAll("{color}", color.value)
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      active,
      switchClass,
      onIconClass,
      offIconClass
    };
  }
});
</script>
