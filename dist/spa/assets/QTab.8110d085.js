import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.fc0315d1.js";
import { U as createComponent } from "./index.a490d332.js";
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
