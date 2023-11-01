import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.18c72137.js";
import { U as createComponent } from "./index.f6bee7e8.js";
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
