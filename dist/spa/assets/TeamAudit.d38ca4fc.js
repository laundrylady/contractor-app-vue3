import { _ as _sfc_main$1 } from "./AuditTimeline.1b9aaafc.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.8b471b4e.js";
import "./QTd.23811c69.js";
import "./selection.f16ca58c.js";
import "./QList.61ca316e.js";
import "./QTable.223663bb.js";
import "./QMarkupTable.9d36bdb5.js";
import "./QSelect.23cd4df9.js";
import "./QItemLabel.9226e67e.js";
import "./QMenu.4d86a9d6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.9fdaa3a5.js";
import "./use-fullscreen.58adf958.js";
import "./axios.032818f2.js";
import "./debug.ffa51329.js";
import "./help.71fbc798.js";
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
