import { _ as _sfc_main$1 } from "./AuditTimeline.44a5cad7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.7ec40092.js";
import "./QTd.0e733a29.js";
import "./selection.429c29a9.js";
import "./QList.e7d813ce.js";
import "./QTable.15895ac8.js";
import "./QMarkupTable.57ce616d.js";
import "./QSelect.d358a99f.js";
import "./QItemLabel.27b25cc2.js";
import "./QMenu.6bf17566.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.89c7bf08.js";
import "./use-fullscreen.5d2e127c.js";
import "./axios.78c8cc16.js";
import "./debug.972d445d.js";
import "./help.c1e38cd4.js";
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
