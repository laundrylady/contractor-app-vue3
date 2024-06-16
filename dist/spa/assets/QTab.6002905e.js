import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.8f0f6e0a.js";
import { S as createComponent } from "./index.97eff735.js";
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
