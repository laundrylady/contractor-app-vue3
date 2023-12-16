import { _ as _sfc_main$1 } from "./AuditTimeline.a5e2d124.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.394bfd7c.js";
import "./QTd.f3c5ebdc.js";
import "./QItemSection.e1742e90.js";
import "./QList.da0c6472.js";
import "./QTable.909ab9ea.js";
import "./QMarkupTable.91caa0fa.js";
import "./QSelect.2f2ce9ca.js";
import "./QItemLabel.0c87707d.js";
import "./QMenu.acd74320.js";
import "./selection.254d4326.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c75cf9c0.js";
import "./use-fullscreen.03ead3c6.js";
import "./axios.d6c1f878.js";
import "./debug.972d445d.js";
import "./help.d243c99c.js";
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
