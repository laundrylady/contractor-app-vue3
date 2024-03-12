import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.10ede83a.js";
import { S as createComponent } from "./index.6ce20806.js";
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
