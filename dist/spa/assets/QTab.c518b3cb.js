import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.1f370fd1.js";
import { U as createComponent } from "./index.96a3f834.js";
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
