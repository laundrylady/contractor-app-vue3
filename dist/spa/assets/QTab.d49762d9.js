import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.268e0a85.js";
import { U as createComponent } from "./index.fa2b967f.js";
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
