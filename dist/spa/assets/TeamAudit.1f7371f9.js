import { _ as _sfc_main$1 } from "./AuditTimeline.e11143ca.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.4ea3bfb0.js";
import "./QTd.4832e323.js";
import "./QItemSection.e253e9f2.js";
import "./QList.1e9d282c.js";
import "./QTable.dfb1c02f.js";
import "./QMarkupTable.a4d7d83a.js";
import "./QSelect.03ae6953.js";
import "./QItemLabel.ae3f0e25.js";
import "./QMenu.77f43e2e.js";
import "./selection.cc8eaae5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.deaf681c.js";
import "./use-fullscreen.aed669c5.js";
import "./axios.01559a60.js";
import "./debug.972d445d.js";
import "./help.08aba6f6.js";
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
