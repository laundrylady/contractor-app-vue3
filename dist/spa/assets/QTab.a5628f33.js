import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.55a5ee2a.js";
import { U as createComponent } from "./index.54585565.js";
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
