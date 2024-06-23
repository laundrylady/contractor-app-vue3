import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.5b13c629.js";
import { S as createComponent } from "./index.646fce27.js";
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
