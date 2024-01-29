import { _ as _sfc_main$1 } from "./AuditTimeline.0d785d66.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.42bdc4c5.js";
import "./QTd.78f0f19b.js";
import "./QItemSection.502da376.js";
import "./QList.6dee3287.js";
import "./QTable.45818293.js";
import "./QMarkupTable.065dac23.js";
import "./QSelect.1dcbaa44.js";
import "./QItemLabel.ee412878.js";
import "./QMenu.ef580008.js";
import "./selection.f1aee430.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c9d3c9aa.js";
import "./use-fullscreen.bc9c04b3.js";
import "./axios.fa438b1c.js";
import "./debug.b9d7424b.js";
import "./help.a99f9321.js";
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
