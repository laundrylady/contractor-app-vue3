import { _ as _sfc_main$1 } from "./AuditTimeline.96f9fe57.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.287c82d5.js";
import "./QTd.ee2c859d.js";
import "./QItemSection.c886ae50.js";
import "./QList.a2ee3970.js";
import "./QTable.8e29dc75.js";
import "./QMarkupTable.94710117.js";
import "./QSelect.25c90bb7.js";
import "./QItemLabel.46c33ec4.js";
import "./QMenu.b7f847d5.js";
import "./selection.d70b1d4a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b83db418.js";
import "./use-fullscreen.32ffca38.js";
import "./axios.4964e504.js";
import "./debug.972d445d.js";
import "./help.38cc707a.js";
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
