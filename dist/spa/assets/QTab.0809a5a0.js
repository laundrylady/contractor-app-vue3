import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.f5542d0b.js";
import { S as createComponent } from "./index.ce2171c7.js";
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
