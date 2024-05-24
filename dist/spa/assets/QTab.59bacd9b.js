import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.02ef9723.js";
import { S as createComponent } from "./index.0b09a5a3.js";
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
