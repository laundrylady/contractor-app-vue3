import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.a0301e43.js";
import { S as createComponent } from "./index.47a08050.js";
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
