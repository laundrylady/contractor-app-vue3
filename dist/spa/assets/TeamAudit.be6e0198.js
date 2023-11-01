import { _ as _sfc_main$1 } from "./AuditTimeline.e08d57b8.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.a0f14cf2.js";
import "./QTd.14ea8e61.js";
import "./selection.05584ff3.js";
import "./QList.a3f7dd15.js";
import "./QTable.edc70773.js";
import "./QMarkupTable.d7b1f2f5.js";
import "./QSelect.5c6dab7a.js";
import "./QItemLabel.8546f47f.js";
import "./QMenu.2624ccd8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.717241a8.js";
import "./use-fullscreen.6f41937a.js";
import "./axios.5b326e61.js";
import "./debug.972d445d.js";
import "./help.66c7b725.js";
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
