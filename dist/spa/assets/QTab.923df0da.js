import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.56c67ff4.js";
import { S as createComponent } from "./index.7a6165bd.js";
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
