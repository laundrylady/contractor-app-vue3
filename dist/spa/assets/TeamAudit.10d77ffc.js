import { _ as _sfc_main$1 } from "./AuditTimeline.c9830ce5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ee07ae95.js";
import "./QTd.ad75f024.js";
import "./QItemSection.8aff2714.js";
import "./QList.89b7e4da.js";
import "./QTable.ce04e01c.js";
import "./QMarkupTable.9204fae0.js";
import "./QSelect.138baceb.js";
import "./QItemLabel.cefa8d89.js";
import "./QMenu.060e04ea.js";
import "./selection.9481dc7d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.61638046.js";
import "./use-fullscreen.fb2d04ce.js";
import "./axios.c73281a3.js";
import "./debug.b9d7424b.js";
import "./help.0fd80ca9.js";
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
