import { _ as _sfc_main$1 } from "./AuditTimeline.8b6089b6.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.2706d944.js";
import "./QTable.d62f1e5e.js";
import "./QList.5b3facef.js";
import "./QMarkupTable.d71103c4.js";
import "./QSelect.85750e6d.js";
import "./QItemSection.27d6c59c.js";
import "./rtl.cffc13f7.js";
import "./format.cebc1930.js";
import "./QLinearProgress.f97bb233.js";
import "./use-fullscreen.47004d73.js";
import "./axios.8e14cdcb.js";
import "./debug.805a8aef.js";
import "./help.04414549.js";
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
