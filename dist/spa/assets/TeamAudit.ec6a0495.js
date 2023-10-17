import { _ as _sfc_main$1 } from "./AuditTimeline.c6fa9990.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.03f0e330.js";
import "./QTd.76ff3275.js";
import "./selection.10f7d824.js";
import "./QList.b9690ece.js";
import "./QTable.046eca40.js";
import "./QMarkupTable.c74b1562.js";
import "./QSelect.beb3a9d4.js";
import "./QItemLabel.164d1a1f.js";
import "./QMenu.cccfb668.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.9cd2470d.js";
import "./use-fullscreen.1fba7cce.js";
import "./axios.6ba618d7.js";
import "./debug.972d445d.js";
import "./help.7fabc921.js";
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
