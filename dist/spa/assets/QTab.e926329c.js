import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.0aed30a2.js";
import { S as createComponent } from "./index.83437ab4.js";
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
