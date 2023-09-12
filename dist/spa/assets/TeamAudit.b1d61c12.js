import { _ as _sfc_main$1 } from "./AuditTimeline.4737cbf8.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.b04b1049.js";
import "./QTable.5dcfb98e.js";
import "./QList.02c43971.js";
import "./QMarkupTable.13166594.js";
import "./QSelect.0f362143.js";
import "./selection.347263e5.js";
import "./QItemLabel.21af0eb9.js";
import "./QMenu.53748de8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b8803ded.js";
import "./use-fullscreen.db269951.js";
import "./axios.aaf6f9f0.js";
import "./debug.ffa51329.js";
import "./help.3cb757e9.js";
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
