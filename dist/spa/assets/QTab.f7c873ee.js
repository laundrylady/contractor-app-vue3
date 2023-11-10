import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.9a8efd1d.js";
import { U as createComponent } from "./index.22b0b9b4.js";
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
