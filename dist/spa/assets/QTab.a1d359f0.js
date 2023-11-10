import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.95a7282e.js";
import { U as createComponent } from "./index.e2534425.js";
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
