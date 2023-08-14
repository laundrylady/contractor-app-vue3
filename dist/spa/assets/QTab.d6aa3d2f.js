import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.6bac3b25.js";
import { S as createComponent } from "./index.ef1b2cb4.js";
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
