import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.d0d4ac97.js";
import { S as createComponent } from "./index.b04b1049.js";
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
