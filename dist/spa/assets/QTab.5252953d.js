import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.8fe7fdc3.js";
import { S as createComponent } from "./index.5c682f3f.js";
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
