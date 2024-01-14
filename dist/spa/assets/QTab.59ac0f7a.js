import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.684b6a01.js";
import { S as createComponent } from "./index.84fae5f5.js";
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
