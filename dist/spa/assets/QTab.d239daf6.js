import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.b0579f56.js";
import { S as createComponent } from "./index.b831cb22.js";
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
