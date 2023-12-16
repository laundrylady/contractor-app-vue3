import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.c39e23af.js";
import { U as createComponent } from "./index.94e66b14.js";
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
