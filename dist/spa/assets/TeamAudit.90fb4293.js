import { _ as _sfc_main$1 } from "./AuditTimeline.49a3af76.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.da51b833.js";
import "./QTd.90604c99.js";
import "./QItemSection.ed48dd6d.js";
import "./QList.81931fc6.js";
import "./QTable.4bd16088.js";
import "./QMarkupTable.c76254ad.js";
import "./QSelect.0224c504.js";
import "./QItemLabel.80562e43.js";
import "./QMenu.7aba1492.js";
import "./selection.75ff086c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.080205e6.js";
import "./use-fullscreen.b00146b5.js";
import "./axios.66bc8d22.js";
import "./debug.972d445d.js";
import "./help.76d7bb04.js";
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
