import { _ as _sfc_main$1 } from "./AuditTimeline.4510855d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.d881d216.js";
import "./QTd.c971f657.js";
import "./QItemSection.b380d0c4.js";
import "./QList.0e1cfd0b.js";
import "./QTable.935542e8.js";
import "./QMarkupTable.ca3d301a.js";
import "./QSelect.e82ba68e.js";
import "./QItemLabel.050cf4b9.js";
import "./QMenu.79272061.js";
import "./selection.e7968301.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.75fa506f.js";
import "./use-fullscreen.8f18f9f8.js";
import "./axios.d5f35dd5.js";
import "./debug.b9d7424b.js";
import "./help.601a2494.js";
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
