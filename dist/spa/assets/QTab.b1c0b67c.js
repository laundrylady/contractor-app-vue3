import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.0c2e489b.js";
import { S as createComponent } from "./index.42bdc4c5.js";
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
