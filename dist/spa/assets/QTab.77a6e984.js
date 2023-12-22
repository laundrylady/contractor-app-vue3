import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.fdf514c2.js";
import { U as createComponent } from "./index.b2f4aca3.js";
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
