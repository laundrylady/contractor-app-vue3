import { _ as _sfc_main$1 } from "./AuditTimeline.0161b7a0.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.a08621ab.js";
import "./QTd.6cbf375b.js";
import "./selection.daac3325.js";
import "./QList.b1103ddc.js";
import "./QTable.270a2201.js";
import "./QMarkupTable.89b0e9ae.js";
import "./QSelect.baaef81d.js";
import "./QItemLabel.2024ad05.js";
import "./QMenu.e594d261.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3b9f42b7.js";
import "./use-fullscreen.a5fb4ef8.js";
import "./axios.da5b98be.js";
import "./debug.ffa51329.js";
import "./help.51de6063.js";
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
