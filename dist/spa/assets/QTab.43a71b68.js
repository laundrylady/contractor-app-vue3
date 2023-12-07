import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.dd7e01be.js";
import { U as createComponent } from "./index.11e648ff.js";
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
