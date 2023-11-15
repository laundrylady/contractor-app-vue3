import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.a5de3677.js";
import { U as createComponent } from "./index.925d5c0f.js";
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
