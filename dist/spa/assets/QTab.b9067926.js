import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.3717d2f6.js";
import { S as createComponent } from "./index.bc725a9e.js";
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
