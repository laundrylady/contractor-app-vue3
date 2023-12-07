import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.c42187bc.js";
import { U as createComponent } from "./index.e4348715.js";
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
