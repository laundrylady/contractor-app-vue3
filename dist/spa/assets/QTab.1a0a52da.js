import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.dd563a68.js";
import { S as createComponent } from "./index.e779ed8f.js";
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
