import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.e46d808f.js";
import { U as createComponent } from "./index.287c82d5.js";
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
