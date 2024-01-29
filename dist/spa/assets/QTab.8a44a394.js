import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.ad37a597.js";
import { S as createComponent } from "./index.e7178dde.js";
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
