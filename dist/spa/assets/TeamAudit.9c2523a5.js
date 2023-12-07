import { _ as _sfc_main$1 } from "./AuditTimeline.f1df4954.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.706d8900.js";
import "./QTd.59a9498f.js";
import "./QItemSection.79ddbbc8.js";
import "./QList.4764cd18.js";
import "./QTable.eca3918d.js";
import "./QMarkupTable.6789e56b.js";
import "./QSelect.e5026263.js";
import "./QItemLabel.31304aca.js";
import "./QMenu.90cbb366.js";
import "./selection.5172fb8f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f4f78209.js";
import "./use-fullscreen.61e68cb7.js";
import "./axios.8acee7c7.js";
import "./debug.972d445d.js";
import "./help.e2addada.js";
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
