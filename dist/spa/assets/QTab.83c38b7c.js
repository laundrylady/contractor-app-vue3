import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.17e3da92.js";
import { S as createComponent } from "./index.d3156251.js";
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
