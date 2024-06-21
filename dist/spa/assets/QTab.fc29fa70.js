import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.c436b57a.js";
import { S as createComponent } from "./index.f4154b53.js";
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
