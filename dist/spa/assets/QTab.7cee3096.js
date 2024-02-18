import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.0bca1d5f.js";
import { S as createComponent } from "./index.4926aa9a.js";
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
