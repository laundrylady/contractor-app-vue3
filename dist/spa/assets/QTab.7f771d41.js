import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.adb2a2af.js";
import { S as createComponent } from "./index.ee07ae95.js";
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