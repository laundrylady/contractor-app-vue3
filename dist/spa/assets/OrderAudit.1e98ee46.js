import { _ as _sfc_main$1 } from "./AuditTimeline.639a4e1e.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.1b2f6b7e.js";
import "./QTable.b80d5afb.js";
import "./QList.aae636d3.js";
import "./QMarkupTable.a087714c.js";
import "./QSelect.c293cd08.js";
import "./QItemSection.bdf28f31.js";
import "./rtl.fb394738.js";
import "./format.4a5cbd2a.js";
import "./QLinearProgress.7eaf7b19.js";
import "./use-fullscreen.d71cfd11.js";
import "./axios.628dc831.js";
import "./debug.805a8aef.js";
import "./help.14444ed6.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderAudit",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          auditable_id: __props.model.id,
          auditable_type: "Order"
        }, null, 8, ["auditable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
