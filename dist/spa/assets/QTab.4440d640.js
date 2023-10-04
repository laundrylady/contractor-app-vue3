import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.6a90decb.js";
import { S as createComponent } from "./index.8b471b4e.js";
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
