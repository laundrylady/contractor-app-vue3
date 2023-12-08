import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.c18268bd.js";
import { U as createComponent } from "./index.a9a574a4.js";
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
