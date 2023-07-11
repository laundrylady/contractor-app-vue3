import { _ as _sfc_main$1 } from "./AuditTimeline.ce4a80f4.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.f6249b41.js";
import "./QTable.2592a9a9.js";
import "./QList.2b57c8a0.js";
import "./QSelect.fa7be61a.js";
import "./QItemSection.176f25cc.js";
import "./format.95a2af90.js";
import "./QLinearProgress.bb9ea8fa.js";
import "./use-fullscreen.dd2e5cf3.js";
import "./axios.ac6cd416.js";
import "./debug.805a8aef.js";
import "./help.a715fe42.js";
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
