import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.e5150e5c.js";
import { U as createComponent } from "./index.63b592af.js";
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
