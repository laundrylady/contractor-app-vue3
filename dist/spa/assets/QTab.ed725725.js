import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.23843894.js";
import { S as createComponent } from "./index.eaa20375.js";
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
