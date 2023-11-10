import { _ as _sfc_main$1 } from "./AuditTimeline.723f3d70.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.bb568279.js";
import "./QTd.28785378.js";
import "./selection.419fc148.js";
import "./QList.420e6329.js";
import "./QTable.b5ba0c51.js";
import "./QMarkupTable.e87d5672.js";
import "./QSelect.9d4df987.js";
import "./QItemLabel.15ac7203.js";
import "./QMenu.00cf9cb3.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.39e4f86d.js";
import "./use-fullscreen.0514a8e0.js";
import "./axios.96e782ce.js";
import "./debug.972d445d.js";
import "./help.2f0ec940.js";
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
