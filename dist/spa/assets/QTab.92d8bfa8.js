import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.979b7ed0.js";
import { S as createComponent } from "./index.bcc73ba7.js";
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
