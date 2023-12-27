import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.6b925d03.js";
import { S as createComponent } from "./index.e10d985a.js";
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
