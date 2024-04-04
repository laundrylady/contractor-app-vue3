import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.9a6538cc.js";
import { S as createComponent } from "./index.1962d2ae.js";
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
