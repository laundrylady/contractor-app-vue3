import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.602a3d7e.js";
import { S as createComponent } from "./index.f0bcd142.js";
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
