import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.0ac9c959.js";
import { U as createComponent } from "./index.46e0a30b.js";
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
