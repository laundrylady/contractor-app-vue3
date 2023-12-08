import { _ as _sfc_main$1 } from "./AuditTimeline.a3d27654.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.a9a574a4.js";
import "./QTd.e485e50a.js";
import "./QItemSection.2b728bb6.js";
import "./QList.0b09280c.js";
import "./QTable.320994c7.js";
import "./QMarkupTable.53deca36.js";
import "./QSelect.9067d31a.js";
import "./QItemLabel.09cf120e.js";
import "./QMenu.9d7ea008.js";
import "./selection.95ad5cb4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.ffb84405.js";
import "./use-fullscreen.0075533c.js";
import "./axios.24ab5c7c.js";
import "./debug.972d445d.js";
import "./help.08e1e70e.js";
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
