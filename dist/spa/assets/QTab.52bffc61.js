import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.6f3edc50.js";
import { U as createComponent } from "./index.862d01a7.js";
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
