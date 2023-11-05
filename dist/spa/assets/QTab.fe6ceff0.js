import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.6d595dad.js";
import { U as createComponent } from "./index.478bbc7a.js";
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
