import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.06d253c6.js";
import { S as createComponent } from "./index.79597c2e.js";
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
