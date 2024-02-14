import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.5cf4d75d.js";
import { S as createComponent } from "./index.f5d83c29.js";
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
