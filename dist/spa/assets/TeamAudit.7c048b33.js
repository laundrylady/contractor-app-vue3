import { _ as _sfc_main$1 } from "./AuditTimeline.e2278887.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.87bd49b7.js";
import "./QTable.7636d595.js";
import "./QList.f266a7fa.js";
import "./QSelect.90e0e815.js";
import "./QItemSection.0c4c4823.js";
import "./format.c2ffa80c.js";
import "./QLinearProgress.0d78402e.js";
import "./use-fullscreen.030541d6.js";
import "./axios.dbd6bbec.js";
import "./debug.805a8aef.js";
import "./help.741e177a.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamAudit",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          auditable_id: __props.model.id,
          auditable_type: "Team"
        }, null, 8, ["auditable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
