import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.850855e2.js";
import { S as createComponent } from "./index.d881d216.js";
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
