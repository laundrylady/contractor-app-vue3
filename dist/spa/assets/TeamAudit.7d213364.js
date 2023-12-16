import { _ as _sfc_main$1 } from "./AuditTimeline.acacfe1e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.bb716ce2.js";
import "./QTd.37bb3808.js";
import "./QItemSection.7a6b4067.js";
import "./QList.f59f43fb.js";
import "./QTable.69ea32df.js";
import "./QMarkupTable.fa3feff8.js";
import "./QSelect.2f64cb0f.js";
import "./QItemLabel.bd0a53c1.js";
import "./QMenu.c9058de9.js";
import "./selection.66302451.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3c6bda61.js";
import "./use-fullscreen.b600ae4d.js";
import "./axios.89c45ee7.js";
import "./debug.972d445d.js";
import "./help.8503c7b8.js";
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
