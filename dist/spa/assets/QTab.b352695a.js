import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.6a65167b.js";
import { U as createComponent } from "./index.d121ec5d.js";
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
