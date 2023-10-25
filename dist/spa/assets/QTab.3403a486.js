import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.5c06197e.js";
import { U as createComponent } from "./index.d24090f9.js";
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
