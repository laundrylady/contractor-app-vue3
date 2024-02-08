import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.0f1f7387.js";
import { S as createComponent } from "./index.2661e1e7.js";
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
