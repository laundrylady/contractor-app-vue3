import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.a2b357ed.js";
import { U as createComponent } from "./index.9d591b1c.js";
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
