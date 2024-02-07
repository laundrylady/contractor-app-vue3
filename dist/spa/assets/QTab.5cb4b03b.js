import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.e9f7ff7b.js";
import { S as createComponent } from "./index.1eb7e0d4.js";
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
