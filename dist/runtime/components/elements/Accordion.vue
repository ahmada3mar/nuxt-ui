<template>
  <div :class="ui.wrapper">
    <HDisclosure v-for="(item, index) in items" v-slot="{ open, close }" :key="index" :default-open="defaultOpen || item.defaultOpen">
      <HDisclosureButton :ref="() => buttonRefs[index] = close" as="template" :disabled="item.disabled">
        <slot :item="item" :index="index" :open="open" :close="close">
          <UButton v-bind="{ ...omit(ui.default, ['openIcon', 'closeIcon']), ...attrs, ...omit(item, ['slot', 'disabled', 'content', 'defaultOpen']) }">
            <template #trailing>
              <UIcon
                :name="!open ? openIcon : closeIcon ? closeIcon : openIcon"
                :class="[
                  open && !closeIcon ? '-rotate-180' : '',
                  uiButton.icon.size[item.size || uiButton.default.size],
                  ui.item.icon
                ]"
              />
            </template>
          </UButton>
        </slot>
      </HDisclosureButton>

      <StateEmitter :open="open" @open="closeOthers(index)" />

      <Transition
        v-bind="ui.transition"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
      >
        <div v-show="open">
          <HDisclosurePanel :class="[ui.item.base, ui.item.size, ui.item.color, ui.item.padding]" static>
            <slot :name="item.slot || 'item'" :item="item" :index="index" :open="open" :close="close">
              {{ item.content }}
            </slot>
          </HDisclosurePanel>
        </div>
      </Transition>
    </HDisclosure>
  </div>
</template>

<script>
import { ref, computed, toRef, defineComponent } from "vue";
import { Disclosure as HDisclosure, DisclosureButton as HDisclosureButton, DisclosurePanel as HDisclosurePanel } from "@headlessui/vue";
import UIcon from "../elements/Icon.vue";
import UButton from "../elements/Button.vue";
import { useUI } from "../../composables/useUI";
import { mergeConfig, omit } from "../../utils";
import StateEmitter from "../../utils/StateEmitter";
import appConfig from "#build/app.config";
import { accordion, button } from "#ui/ui.config";
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.accordion, accordion);
const configButton = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
export default defineComponent({
  components: {
    HDisclosure,
    HDisclosureButton,
    HDisclosurePanel,
    UIcon,
    UButton,
    StateEmitter
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      default: () => []
    },
    defaultOpen: {
      type: Boolean,
      default: false
    },
    openIcon: {
      type: String,
      default: () => config.default.openIcon
    },
    closeIcon: {
      type: String,
      default: () => config.default.closeIcon
    },
    multiple: {
      type: Boolean,
      default: false
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
    const { ui, attrs } = useUI("accordion", toRef(props, "ui"), config, toRef(props, "class"));
    const uiButton = computed(() => configButton);
    const buttonRefs = ref([]);
    function closeOthers(currentIndex) {
      if (!props.items[currentIndex].closeOthers && props.multiple) {
        return;
      }
      const totalItems = buttonRefs.value.length;
      const order = Array.from({ length: totalItems }, (_, i) => (currentIndex + i) % totalItems).filter((index) => index !== currentIndex).reverse();
      for (const index of order) {
        const close = buttonRefs.value[index];
        close();
      }
    }
    function onEnter(el, done) {
      el.style.height = "0";
      el.offsetHeight;
      el.style.height = el.scrollHeight + "px";
      el.addEventListener("transitionend", done, { once: true });
    }
    function onBeforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
      el.offsetHeight;
    }
    function onAfterEnter(el) {
      el.style.height = "auto";
    }
    function onLeave(el, done) {
      el.style.height = "0";
      el.addEventListener("transitionend", done, { once: true });
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      uiButton,
      attrs,
      buttonRefs,
      closeOthers,
      omit,
      onEnter,
      onBeforeLeave,
      onAfterEnter,
      onLeave
    };
  }
});
</script>
