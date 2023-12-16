import { _ as _sfc_main$1 } from "./AuditTimeline.1bc84253.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.6a5c0810.js";
import "./QTd.6fc409ec.js";
import "./QItemSection.cb2915ec.js";
import "./QList.969289e2.js";
import "./QTable.a64cb520.js";
import "./QMarkupTable.047f98d8.js";
import "./QSelect.fde53a09.js";
import "./QItemLabel.64d93eb6.js";
import "./QMenu.49b63711.js";
import "./selection.2a9bbdda.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.85cd81a0.js";
import "./use-fullscreen.205642cc.js";
import "./axios.83cf9320.js";
import "./debug.972d445d.js";
import "./help.4330a8b0.js";
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
