import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.87f6d397.js";
import { U as createComponent } from "./index.e4f8656c.js";
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
