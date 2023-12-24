import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.a24c1563.js";
import { U as createComponent } from "./index.dd540b4f.js";
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
