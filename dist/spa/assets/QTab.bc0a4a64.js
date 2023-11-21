import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.7ab43223.js";
import { U as createComponent } from "./index.6498e03d.js";
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
