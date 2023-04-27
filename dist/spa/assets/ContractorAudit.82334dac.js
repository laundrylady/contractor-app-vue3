import { _ as _sfc_main$1 } from "./AuditTimeline.030bd11b.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.f0b4ebe6.js";
import "./QTable.073d2b2c.js";
import "./QList.4c7ed513.js";
import "./QMarkupTable.f837a51b.js";
import "./QSelect.4af0b214.js";
import "./QItemSection.9ea19b97.js";
import "./rtl.7f1de635.js";
import "./format.8242738c.js";
import "./QLinearProgress.a8fe1326.js";
import "./axios.d61905ae.js";
import "./debug.805a8aef.js";
import "./help.cd1e743b.js";
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
