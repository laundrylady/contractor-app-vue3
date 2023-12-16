import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.59dc8b84.js";
import { U as createComponent } from "./index.7f74603c.js";
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
