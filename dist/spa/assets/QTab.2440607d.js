import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.032f31f8.js";
import { S as createComponent } from "./index.131c16d8.js";
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
