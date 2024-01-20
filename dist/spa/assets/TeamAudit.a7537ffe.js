import { _ as _sfc_main$1 } from "./AuditTimeline.90d56bd4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.bc725a9e.js";
import "./QTd.bec3857f.js";
import "./QItemSection.603e7659.js";
import "./QList.c751a8cb.js";
import "./QTable.89cd271f.js";
import "./QMarkupTable.490bae5f.js";
import "./QSelect.004c915d.js";
import "./QItemLabel.c321e11e.js";
import "./QMenu.bb8dbd35.js";
import "./selection.77eb3195.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.e9aba0b9.js";
import "./use-fullscreen.5c78359b.js";
import "./axios.472e17a9.js";
import "./debug.b9d7424b.js";
import "./help.e514973d.js";
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
