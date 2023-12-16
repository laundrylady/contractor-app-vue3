import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.0376e625.js";
import { U as createComponent } from "./index.6a5c0810.js";
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
