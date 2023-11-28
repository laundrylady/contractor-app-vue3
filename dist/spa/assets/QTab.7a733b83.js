import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.9cf46273.js";
import { U as createComponent } from "./index.2c4e0f9e.js";
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
