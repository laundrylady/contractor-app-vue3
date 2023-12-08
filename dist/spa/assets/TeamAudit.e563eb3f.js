import { _ as _sfc_main$1 } from "./AuditTimeline.05a09b7d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.d3d6e530.js";
import "./QTd.297bcb67.js";
import "./QItemSection.0d9defb0.js";
import "./QList.1c15f565.js";
import "./QTable.705691e8.js";
import "./QMarkupTable.f60178ce.js";
import "./QSelect.0adb6ca7.js";
import "./QItemLabel.6e381017.js";
import "./QMenu.14096171.js";
import "./selection.0cf3ea97.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.aab8a3f0.js";
import "./use-fullscreen.857bd7a8.js";
import "./axios.92d2b7e0.js";
import "./debug.972d445d.js";
import "./help.2050d37a.js";
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
