import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.3da14194.js";
import { U as createComponent } from "./index.87d3d2b7.js";
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
