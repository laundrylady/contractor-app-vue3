import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.bdb58173.js";
import { U as createComponent } from "./index.208ac1b0.js";
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
