import { _ as _sfc_main$1 } from "./AuditTimeline.aed20bba.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ed589837.js";
import "./QTd.d1812828.js";
import "./QItemSection.38132acc.js";
import "./QList.47d456e7.js";
import "./QTable.050912a2.js";
import "./QMarkupTable.dad016bf.js";
import "./QSelect.82a1fb86.js";
import "./QItemLabel.d769c6e6.js";
import "./QMenu.a924692a.js";
import "./selection.6dffb89e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.588f456b.js";
import "./use-fullscreen.2af2a328.js";
import "./axios.69534440.js";
import "./debug.b9d7424b.js";
import "./help.06dc735d.js";
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
