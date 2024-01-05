import { _ as _sfc_main$1 } from "./AuditTimeline.5938ab7f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f2f120a5.js";
import "./QTd.b92312ed.js";
import "./format.f6872143.js";
import "./QList.6336f6ec.js";
import "./QTable.8b86aa74.js";
import "./QMarkupTable.49685c81.js";
import "./QSelect.63a09874.js";
import "./QItemLabel.3aef1a02.js";
import "./selection.ee8e1f36.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.69b713bd.js";
import "./use-fullscreen.5affefb7.js";
import "./axios.30336af0.js";
import "./debug.b9d7424b.js";
import "./help.78750dfe.js";
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
