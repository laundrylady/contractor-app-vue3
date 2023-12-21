import { _ as _sfc_main$1 } from "./AuditTimeline.4b746445.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.8df0f4ad.js";
import "./QTd.204e79fd.js";
import "./QItemSection.3a9dd665.js";
import "./QList.dc38f62b.js";
import "./QTable.e4c678ba.js";
import "./QMarkupTable.d089b46b.js";
import "./QSelect.28512dd8.js";
import "./QItemLabel.bae79bf9.js";
import "./QMenu.3de768d1.js";
import "./selection.75c2193f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d0153f86.js";
import "./use-fullscreen.572b6737.js";
import "./axios.633c6a61.js";
import "./debug.972d445d.js";
import "./help.794a0228.js";
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
