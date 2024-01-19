import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.be4b1fe1.js";
import { S as createComponent } from "./index.2a8b6235.js";
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
