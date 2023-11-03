import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.976e32be.js";
import { U as createComponent } from "./index.dab5106a.js";
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
