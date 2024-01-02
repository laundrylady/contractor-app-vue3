import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.648a80cd.js";
import { S as createComponent } from "./index.2bb9246b.js";
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
