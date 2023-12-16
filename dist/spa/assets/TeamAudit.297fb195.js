import { _ as _sfc_main$1 } from "./AuditTimeline.2159c6c4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.94e66b14.js";
import "./QTd.a4169a86.js";
import "./QItemSection.4161e238.js";
import "./QList.c73a12dd.js";
import "./QTable.4f80b1ca.js";
import "./QMarkupTable.d462bf72.js";
import "./QSelect.66943613.js";
import "./QItemLabel.051732c0.js";
import "./QMenu.3336b015.js";
import "./selection.670e2d60.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a7979528.js";
import "./use-fullscreen.74e0466a.js";
import "./axios.d02ca954.js";
import "./debug.972d445d.js";
import "./help.47eaabb7.js";
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
