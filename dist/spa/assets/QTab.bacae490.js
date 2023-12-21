import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.9a50fa3f.js";
import { U as createComponent } from "./index.8df0f4ad.js";
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
