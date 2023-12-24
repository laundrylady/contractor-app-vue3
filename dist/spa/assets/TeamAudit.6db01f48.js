import { _ as _sfc_main$1 } from "./AuditTimeline.54cfd9c7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.603eb027.js";
import "./QTd.bcc6eb6a.js";
import "./QItemSection.99553ed2.js";
import "./QList.efd19b74.js";
import "./QTable.0c443eac.js";
import "./QMarkupTable.b2060a35.js";
import "./QSelect.9906ea99.js";
import "./QItemLabel.5abed41a.js";
import "./QMenu.15535491.js";
import "./selection.67008780.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0616c0f0.js";
import "./use-fullscreen.18a5b6b4.js";
import "./axios.fc054a7a.js";
import "./debug.972d445d.js";
import "./help.42cbd537.js";
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
