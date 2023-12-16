import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.29e407ef.js";
import { U as createComponent } from "./index.394bfd7c.js";
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
