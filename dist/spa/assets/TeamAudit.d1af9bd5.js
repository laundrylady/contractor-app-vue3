import { _ as _sfc_main$1 } from "./AuditTimeline.7489da0a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.224e20e0.js";
import "./QTd.09ddb31c.js";
import "./QItemSection.0dd1e131.js";
import "./QList.358d155c.js";
import "./QTable.e6b30b30.js";
import "./QMarkupTable.f1642325.js";
import "./QSelect.ee2d0560.js";
import "./QItemLabel.a0618c3e.js";
import "./QMenu.f2bed1ae.js";
import "./selection.865df55e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.468b0647.js";
import "./use-fullscreen.851cb0a8.js";
import "./axios.3cd41a70.js";
import "./debug.b9d7424b.js";
import "./help.b31953bc.js";
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
