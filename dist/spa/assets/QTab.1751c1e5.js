import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.fa0b00ad.js";
import { S as createComponent } from "./index.a20363ca.js";
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
