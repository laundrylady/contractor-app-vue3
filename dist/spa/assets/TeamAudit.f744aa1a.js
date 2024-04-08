import { _ as _sfc_main$1 } from "./AuditTimeline.f880395b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e01fb56c.js";
import "./QTd.d40fd258.js";
import "./QItemSection.a4f40f83.js";
import "./QList.b2321818.js";
import "./QTable.0ae4cdb5.js";
import "./QMarkupTable.033cd31a.js";
import "./QSelect.3c1f85f2.js";
import "./QItemLabel.1b847659.js";
import "./QMenu.637c5eb6.js";
import "./selection.22383e78.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.42a48068.js";
import "./use-fullscreen.e1398b30.js";
import "./axios.12a8e334.js";
import "./debug.b9d7424b.js";
import "./help.0c3f1d03.js";
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
