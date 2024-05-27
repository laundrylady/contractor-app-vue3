import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.e418e226.js";
import { S as createComponent } from "./index.9b9c09ca.js";
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
