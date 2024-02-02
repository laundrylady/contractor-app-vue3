import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.3062318e.js";
import { S as createComponent } from "./index.20697ea6.js";
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
