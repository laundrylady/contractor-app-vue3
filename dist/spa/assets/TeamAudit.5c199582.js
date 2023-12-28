import { _ as _sfc_main$1 } from "./AuditTimeline.7325b652.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f9822a69.js";
import "./QTd.7c8cad85.js";
import "./QItemSection.77279501.js";
import "./QList.a21a4cf1.js";
import "./QTable.de17af0a.js";
import "./QMarkupTable.f069b402.js";
import "./QSelect.0cf8ed7b.js";
import "./QItemLabel.d3a739f0.js";
import "./QMenu.6945e39a.js";
import "./selection.d4361626.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f7451b7f.js";
import "./use-fullscreen.2da1d569.js";
import "./axios.426a9acd.js";
import "./debug.b9d7424b.js";
import "./help.2b676caf.js";
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
