import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.b47df1f9.js";
import { S as createComponent } from "./index.e9465d3e.js";
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
