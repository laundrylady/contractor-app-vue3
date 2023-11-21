import { _ as _sfc_main$1 } from "./AuditTimeline.952a6a46.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.6498e03d.js";
import "./QTd.7b5e206e.js";
import "./QItemSection.1b5f9806.js";
import "./QList.62defb36.js";
import "./QTable.cb2dee75.js";
import "./QMarkupTable.d6d77a13.js";
import "./QSelect.11fef49d.js";
import "./QItemLabel.10e2d0bc.js";
import "./QMenu.04a25c97.js";
import "./selection.11611972.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.5171f988.js";
import "./use-fullscreen.cc0576b2.js";
import "./axios.4a95d170.js";
import "./debug.972d445d.js";
import "./help.49a72cd2.js";
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
