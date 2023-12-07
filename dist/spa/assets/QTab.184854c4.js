import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.502eac6b.js";
import { U as createComponent } from "./index.397bbb4f.js";
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
