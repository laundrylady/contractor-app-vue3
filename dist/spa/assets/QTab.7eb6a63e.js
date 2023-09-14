import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.0d51de05.js";
import { S as createComponent } from "./index.2182576f.js";
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
