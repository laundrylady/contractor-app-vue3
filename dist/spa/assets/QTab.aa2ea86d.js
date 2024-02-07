import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.88702326.js";
import { S as createComponent } from "./index.d0f04a73.js";
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
