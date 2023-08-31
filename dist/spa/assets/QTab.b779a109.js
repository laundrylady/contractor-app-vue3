import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.e3976c00.js";
import { S as createComponent } from "./index.09db86c6.js";
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
