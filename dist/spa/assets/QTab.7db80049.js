import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.9dc8e241.js";
import { U as createComponent } from "./index.36ffcf9b.js";
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