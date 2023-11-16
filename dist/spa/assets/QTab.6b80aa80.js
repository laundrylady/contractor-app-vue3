import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.564e0449.js";
import { U as createComponent } from "./index.d6d4bbef.js";
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
