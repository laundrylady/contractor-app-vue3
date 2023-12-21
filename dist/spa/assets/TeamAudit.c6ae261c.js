import { _ as _sfc_main$1 } from "./AuditTimeline.f1d96cfd.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.181f8828.js";
import "./QTd.194b4153.js";
import "./QItemSection.fcf3298c.js";
import "./QList.e90f9510.js";
import "./QTable.72f29fd0.js";
import "./QMarkupTable.dca4c372.js";
import "./QSelect.b255285f.js";
import "./QItemLabel.baa0b052.js";
import "./QMenu.a3cce960.js";
import "./selection.0eb64ddd.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b0e18df1.js";
import "./use-fullscreen.8d88688b.js";
import "./axios.b1a36989.js";
import "./debug.972d445d.js";
import "./help.e19066e7.js";
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
