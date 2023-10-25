import { _ as _sfc_main$1 } from "./AuditTimeline.958a9d0f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.fc5b7253.js";
import "./QTd.976a0130.js";
import "./selection.5c80716e.js";
import "./QList.0970dba8.js";
import "./QTable.557ac89e.js";
import "./QMarkupTable.04cfc86d.js";
import "./QSelect.6ace0b26.js";
import "./QItemLabel.a0d0e7dd.js";
import "./QMenu.e4d44051.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.08b85f9b.js";
import "./use-fullscreen.7e04aacc.js";
import "./axios.1c53bd8d.js";
import "./debug.972d445d.js";
import "./help.4fde57f5.js";
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
