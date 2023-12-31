<template>
  <HPopover ref="popover" v-slot="{ open, close }" :class="ui.wrapper" v-bind="attrs" @mouseleave="onMouseLeave">
    <HPopoverButton
      ref="trigger"
      as="div"
      :disabled="disabled"
      class="inline-flex w-full"
      role="button"
      @mouseover="onMouseOver"
    >
      <slot :open="open" :close="close">
        <button :disabled="disabled">
          Open
        </button>
      </slot>
    </HPopoverButton>

    <div v-if="open" ref="container" :class="[ui.container, ui.width]" :style="containerStyle" @mouseover="onMouseOver">
      <Transition appear v-bind="ui.transition">
        <HPopoverPanel :class="[ui.base, ui.background, ui.ring, ui.rounded, ui.shadow]" static>
          <slot name="panel" :open="open" :close="close" />
        </HPopoverPanel>
      </Transition>
    </div>
  </HPopover>
</template>

<script>
import { computed, ref, toRef, onMounted, defineComponent } from "vue";
import { defu } from "defu";
import { Popover as HPopover, PopoverButton as HPopoverButton, PopoverPanel as HPopoverPanel } from "@headlessui/vue";
import { useUI } from "../../composables/useUI";
import { usePopper } from "../../composables/usePopper";
import { mergeConfig } from "../../utils";
import appConfig from "#build/app.config";
import { popover } from "#ui/ui.config";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.popover, popover);
export default defineComponent({
  components: {
    HPopover,
    HPopoverButton,
    HPopoverPanel
  },
  inheritAttrs: false,
  props: {
    mode: {
      type: String,
      default: "click",
      validator: (value) => ["click", "hover"].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
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
    const { ui, attrs } = useUI("popover", toRef(props, "ui"), config, toRef(props, "class"));
    const popper = computed(() => defu(props.mode === "hover" ? { offsetDistance: 0 } : {}, props.popper, ui.value.popper));
    const [trigger, container] = usePopper(popper.value);
    const popover2 = ref(null);
    const popoverApi = ref(null);
    let openTimeout = null;
    let closeTimeout = null;
    onMounted(() => {
      const popoverProvides = popover2.value?.$.provides;
      if (!popoverProvides) {
        return;
      }
      const popoverProvidesSymbols = Object.getOwnPropertySymbols(popoverProvides);
      popoverApi.value = popoverProvidesSymbols.length && popoverProvides[popoverProvidesSymbols[0]];
    });
    const containerStyle = computed(() => {
      const offsetDistance = props.popper?.offsetDistance || ui.value.popper?.offsetDistance || 8;
      return props.mode === "hover" ? { paddingTop: `${offsetDistance}px`, paddingBottom: `${offsetDistance}px` } : {};
    });
    function onMouseOver() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      if (popoverApi.value.popoverState === 0) {
        return;
      }
      openTimeout = openTimeout || setTimeout(() => {
        popoverApi.value.togglePopover && popoverApi.value.togglePopover();
        openTimeout = null;
      }, props.openDelay);
    }
    function onMouseLeave() {
      if (props.mode !== "hover" || !popoverApi.value) {
        return;
      }
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
      if (popoverApi.value.popoverState === 1) {
        return;
      }
      closeTimeout = closeTimeout || setTimeout(() => {
        popoverApi.value.closePopover && popoverApi.value.closePopover();
        closeTimeout = null;
      }, props.closeDelay);
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      popover: popover2,
      trigger,
      container,
      containerStyle,
      onMouseOver,
      onMouseLeave
    };
  }
});
</script>
