import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.93ab30a9.js";
import { S as createComponent } from "./index.64115597.js";
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
