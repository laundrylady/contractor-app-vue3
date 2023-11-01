import { _ as _sfc_main$1 } from "./AuditTimeline.959ddc73.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f6bee7e8.js";
import "./QTd.9cb39365.js";
import "./selection.17eb1196.js";
import "./QList.56bbd19d.js";
import "./QTable.89931459.js";
import "./QMarkupTable.fdfc109f.js";
import "./QSelect.ae6eabb7.js";
import "./QItemLabel.58d25c90.js";
import "./QMenu.99b4f319.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.abddd218.js";
import "./use-fullscreen.a4532333.js";
import "./axios.7f29f827.js";
import "./debug.972d445d.js";
import "./help.1753c5fa.js";
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
