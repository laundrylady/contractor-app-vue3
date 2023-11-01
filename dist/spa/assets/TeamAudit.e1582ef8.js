import { _ as _sfc_main$1 } from "./AuditTimeline.39719953.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.cda05827.js";
import "./QTd.047abd09.js";
import "./selection.46c3c491.js";
import "./QList.c533943e.js";
import "./QTable.0d0432db.js";
import "./QMarkupTable.7b9c25dd.js";
import "./QSelect.631ed9c6.js";
import "./QItemLabel.e4fe2727.js";
import "./QMenu.9f6a2852.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0e9484a1.js";
import "./use-fullscreen.c0713fe0.js";
import "./axios.c09d4593.js";
import "./debug.972d445d.js";
import "./help.d4dd930e.js";
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
