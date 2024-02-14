import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.befab45d.js";
import { S as createComponent } from "./index.6acd2f95.js";
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
