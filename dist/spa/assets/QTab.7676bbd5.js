import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.c5955fac.js";
import { S as createComponent } from "./index.370d568b.js";
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
