import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.4b6bd7c2.js";
import { U as createComponent } from "./index.c5118e29.js";
var QTab = createComponent({
  name: "QTab",
  props: useTabProps,
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const { renderTab } = useTab(props, slots, emit);
    return () => renderTab("div");
  }
});
export { QTab as Q };
