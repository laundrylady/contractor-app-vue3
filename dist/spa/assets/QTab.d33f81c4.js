import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.5d01ff65.js";
import { U as createComponent } from "./index.686b673d.js";
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
