import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.cf8d227b.js";
import { S as createComponent } from "./index.9b8b7269.js";
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
