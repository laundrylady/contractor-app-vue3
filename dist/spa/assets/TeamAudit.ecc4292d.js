import { _ as _sfc_main$1 } from "./AuditTimeline.7600123c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.d6d4bbef.js";
import "./QTd.7efd3e83.js";
import "./selection.db1a4dd6.js";
import "./QList.b214f7f0.js";
import "./QTable.0431a192.js";
import "./QMarkupTable.c52c3c99.js";
import "./QSelect.d0580ce8.js";
import "./QItemLabel.45c17f29.js";
import "./QMenu.f8214587.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d61c5c83.js";
import "./use-fullscreen.4cd161d2.js";
import "./axios.d2a2ec81.js";
import "./debug.972d445d.js";
import "./help.895f4276.js";
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
