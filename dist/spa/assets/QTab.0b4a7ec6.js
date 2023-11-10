import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.11b799a0.js";
import { U as createComponent } from "./index.f7c5cca4.js";
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
