import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.f2f9317b.js";
import { S as createComponent } from "./index.17833339.js";
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
