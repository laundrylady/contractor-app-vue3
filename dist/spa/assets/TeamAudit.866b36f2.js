import { _ as _sfc_main$1 } from "./AuditTimeline.eba3cd5e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e4348715.js";
import "./QTd.3bb53e93.js";
import "./QItemSection.71de5245.js";
import "./QList.69ea1d7e.js";
import "./QTable.6cd06599.js";
import "./QMarkupTable.0f00cfa5.js";
import "./QSelect.0457cf29.js";
import "./QItemLabel.adad20e3.js";
import "./QMenu.ae36f817.js";
import "./selection.97a9cfee.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.476ddcfd.js";
import "./use-fullscreen.17bf8a4f.js";
import "./axios.5f357301.js";
import "./debug.972d445d.js";
import "./help.4ff0f899.js";
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
