import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.16c32a52.js";
import { S as createComponent } from "./index.8e5fd2f9.js";
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
