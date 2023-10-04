import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.361d3721.js";
import { S as createComponent } from "./index.8de11d6d.js";
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
