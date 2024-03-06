import { _ as _sfc_main$1 } from "./AuditTimeline.13dd659b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.17833339.js";
import "./QTd.ed9bd2ba.js";
import "./QItemSection.2e00f0a9.js";
import "./QList.46fbaee9.js";
import "./QTable.9ea800fb.js";
import "./QMarkupTable.9e8924fb.js";
import "./QSelect.6163ca24.js";
import "./QItemLabel.7df690d2.js";
import "./QMenu.6ccbcb91.js";
import "./selection.093ede3f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.daf0fc30.js";
import "./use-fullscreen.2b8d871e.js";
import "./axios.09203366.js";
import "./debug.b9d7424b.js";
import "./help.6ffb50b6.js";
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
