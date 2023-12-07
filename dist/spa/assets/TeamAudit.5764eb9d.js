import { _ as _sfc_main$1 } from "./AuditTimeline.18f89ba9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.397bbb4f.js";
import "./QTd.e71850b2.js";
import "./QItemSection.cad3aa81.js";
import "./QList.b8d58b8d.js";
import "./QTable.2a5f9b5d.js";
import "./QMarkupTable.3f9e3b1f.js";
import "./QSelect.1f2f5325.js";
import "./QItemLabel.06bf30d0.js";
import "./QMenu.7d3b2215.js";
import "./selection.fcec5241.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.499acee6.js";
import "./use-fullscreen.8f384bf2.js";
import "./axios.e5bf32bb.js";
import "./debug.972d445d.js";
import "./help.a38f3a12.js";
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
