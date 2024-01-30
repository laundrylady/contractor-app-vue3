import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.a7f44417.js";
import { S as createComponent } from "./index.c627736b.js";
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
