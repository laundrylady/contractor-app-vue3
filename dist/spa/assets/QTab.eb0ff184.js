import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.e3f58ee8.js";
import { U as createComponent } from "./index.a8c2088f.js";
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
