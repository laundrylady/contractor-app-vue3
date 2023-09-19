import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.eb9f2d21.js";
import { S as createComponent } from "./index.d79e1fe7.js";
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
