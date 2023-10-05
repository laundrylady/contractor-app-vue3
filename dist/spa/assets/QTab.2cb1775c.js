import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.5634ca54.js";
import { S as createComponent } from "./index.c2e1ea50.js";
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
