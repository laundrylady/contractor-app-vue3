import { _ as _sfc_main$1 } from "./AuditTimeline.8f3a56c7.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f4bfaae2.js";
import "./QTd.33ac807a.js";
import "./QItemSection.cd58a5ba.js";
import "./QList.9cb4274d.js";
import "./QTable.bdb4a518.js";
import "./QMarkupTable.dcdcfd23.js";
import "./QSelect.0ef09b4b.js";
import "./QItemLabel.addde6e1.js";
import "./QMenu.7f21dfc8.js";
import "./selection.81644041.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.9297ab86.js";
import "./use-fullscreen.00979cff.js";
import "./axios.38a0c625.js";
import "./debug.b9d7424b.js";
import "./help.387f8c36.js";
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
