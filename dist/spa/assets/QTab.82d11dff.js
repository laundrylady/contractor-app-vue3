import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.38d86d3b.js";
import { S as createComponent } from "./index.a50f0974.js";
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
