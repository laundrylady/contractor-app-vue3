import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.627cd838.js";
import { U as createComponent } from "./index.f6cde04a.js";
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
