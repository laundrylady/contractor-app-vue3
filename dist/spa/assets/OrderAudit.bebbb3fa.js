import { _ as _sfc_main$1 } from "./AuditTimeline.a69fb3e2.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.3eea7960.js";
import "./QTable.e2eb23ae.js";
import "./QList.acfa1549.js";
import "./QMarkupTable.50ec169b.js";
import "./QSelect.1c9fa3ed.js";
import "./QItemSection.621084f7.js";
import "./rtl.583477fb.js";
import "./format.aadc6b26.js";
import "./QLinearProgress.6916314b.js";
import "./axios.a37557cf.js";
import "./debug.805a8aef.js";
import "./help.79cd30dc.js";
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
