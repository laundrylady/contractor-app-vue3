import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.fea413ee.js";
import { U as createComponent } from "./index.3b1f6dca.js";
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
