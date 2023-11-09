import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.dc31f16f.js";
import { U as createComponent } from "./index.2c1bc8d2.js";
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
