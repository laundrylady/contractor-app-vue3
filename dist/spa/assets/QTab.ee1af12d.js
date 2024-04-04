import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.7b80fef1.js";
import { S as createComponent } from "./index.cd25fff4.js";
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
