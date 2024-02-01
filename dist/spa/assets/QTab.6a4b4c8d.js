import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.c9a98924.js";
import { S as createComponent } from "./index.a4ada3b6.js";
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
