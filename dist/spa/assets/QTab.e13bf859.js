import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.68865d18.js";
import { U as createComponent } from "./index.df2fd7d3.js";
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
