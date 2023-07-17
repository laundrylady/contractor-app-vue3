import { _ as _sfc_main$1 } from "./AuditTimeline.0d670132.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.ff28a0be.js";
import "./QTable.72abe654.js";
import "./QList.fea27c01.js";
import "./QSelect.d9c1a7f5.js";
import "./QItemSection.46a22740.js";
import "./format.0f02b137.js";
import "./QLinearProgress.c11c5cee.js";
import "./use-fullscreen.a67c953b.js";
import "./axios.31973f2c.js";
import "./debug.805a8aef.js";
import "./help.805c841c.js";
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
