import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.90787bb0.js";
import { S as createComponent } from "./index.ed5d663e.js";
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
