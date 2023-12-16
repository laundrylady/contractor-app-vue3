import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.72066b5a.js";
import { U as createComponent } from "./index.da11e37d.js";
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
