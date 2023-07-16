import { _ as _sfc_main$1 } from "./AuditTimeline.1d1a0daf.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.1d2cc295.js";
import "./QTable.405241cd.js";
import "./QList.7e21fa8d.js";
import "./QSelect.96553d0d.js";
import "./QItemSection.bf749560.js";
import "./format.2692d829.js";
import "./QLinearProgress.52573e58.js";
import "./use-fullscreen.40165d21.js";
import "./axios.91d62303.js";
import "./debug.805a8aef.js";
import "./help.f0ed8230.js";
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
