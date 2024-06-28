import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.27f3fe59.js";
import { S as createComponent } from "./index.bffa8c3c.js";
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
