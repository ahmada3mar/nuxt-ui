<template>
  <div ref="trigger" :class="ui.wrapper" v-bind="attrs" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <slot :open="open">
      Hover
    </slot>

    <div v-if="open && !prevent" ref="container" :class="[ui.container, ui.width]">
      <Transition appear v-bind="ui.transition">
        <div :class="[ui.base, ui.background, ui.color, ui.rounded, ui.shadow, ui.ring]">
          <slot name="text">
            {{ text }}
          </slot>

          <span v-if="shortcuts?.length" :class="ui.shortcuts">
            <span class="mx-1 text-gray-700 dark:text-gray-200">&middot;</span>
            <UKbd v-for="shortcut of shortcuts" :key="shortcut" size="xs">
              {{ shortcut }}
            </Ukbd>
          </span>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
import { computed, ref, toRef, defineComponent } from "vue";
import { defu } from "defu";
import UKbd from "../elements/Kbd.vue";
import { useUI } from "../../composables/useUI";
import { usePopper } from "../../composables/usePopper";
import { mergeConfig } from "../../utils";
import appConfig from "#build/app.config";
import { tooltip } from "#ui/ui.config";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.tooltip, tooltip);
export default defineComponent({
  components: {
    UKbd
  },
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      default: null
    },
    prevent: {
      type: Boolean,
      default: false
    },
    shortcuts: {
      type: Array,
      default: () => []
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 0
    },
    popper: {
      type: Object,
      default: () => ({})
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
  setup(props) {
    const { ui, attrs } = useUI("tooltip", toRef(props, "ui"), config, toRef(props, "class"));
    const popper = computed(() => defu({}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const open = ref(false);
    let openTimeout = null;
    let closeTimeout = null;
    function onMouseOver() {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (open.value) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        open.value = true;
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (!open.value) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        open.value = false;
        closeTimeout = null;
      }, props.closeDelay);
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      trigger,
      container,
      open,
      onMouseOver,
      onMouseLeave
    };
  }
});
</script>
