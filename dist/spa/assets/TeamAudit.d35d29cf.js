import { _ as _sfc_main$1 } from "./AuditTimeline.bf87bc91.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.4d9fc4f8.js";
import "./QTd.b094114d.js";
import "./QItemSection.f65edf75.js";
import "./QList.64e212d8.js";
import "./QTable.f21b9898.js";
import "./QMarkupTable.e793bb5a.js";
import "./QSelect.34425dc9.js";
import "./QItemLabel.ce2e3392.js";
import "./QMenu.77f0a42a.js";
import "./selection.d6e3c6e6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a1631aa3.js";
import "./use-fullscreen.78b26e6e.js";
import "./axios.ed3e2e26.js";
import "./debug.b9d7424b.js";
import "./help.a6bf7bbe.js";
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
