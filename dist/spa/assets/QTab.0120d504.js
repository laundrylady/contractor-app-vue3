import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.b1886d4b.js";
import { S as createComponent } from "./index.1a6e03af.js";
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
