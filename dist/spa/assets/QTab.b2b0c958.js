import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.b0a7de2c.js";
import { S as createComponent } from "./index.bd785861.js";
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
