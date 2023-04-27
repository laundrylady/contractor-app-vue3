import { _ as _sfc_main$1 } from "./AuditTimeline.d65df221.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.253fe345.js";
import "./QTable.73f79253.js";
import "./QList.17898fd8.js";
import "./QMarkupTable.daa445b9.js";
import "./QSelect.50985c2c.js";
import "./QItemSection.04ae4ed1.js";
import "./rtl.341eb743.js";
import "./format.8649e8ee.js";
import "./QLinearProgress.46fe0bb7.js";
import "./axios.2d898732.js";
import "./debug.805a8aef.js";
import "./help.b5179f9e.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorAudit",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          auditable_id: __props.model.id,
          auditable_type: "User"
        }, null, 8, ["auditable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
