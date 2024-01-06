import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.ddbf85fb.js";
import { S as createComponent } from "./index.4a7ccaf8.js";
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
