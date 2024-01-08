import { u as useTabProps, a as useTabEmits, b as useTab } from "./QTabs.4bce6def.js";
import { S as createComponent } from "./index.c08a4e10.js";
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
