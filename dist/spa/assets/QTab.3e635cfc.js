import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.38b033f6.js";
import { S as createComponent } from "./index.33efd2c0.js";
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
