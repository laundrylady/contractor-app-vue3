import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.c19c6863.js";
import { S as createComponent } from "./index.068b7692.js";
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
