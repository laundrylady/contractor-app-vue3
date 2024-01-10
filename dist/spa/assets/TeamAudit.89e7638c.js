import { _ as _sfc_main$1 } from "./AuditTimeline.bfedea69.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.79597c2e.js";
import "./QTd.39e2e314.js";
import "./QItemSection.e7a6db3d.js";
import "./QList.7eaafeae.js";
import "./QTable.4691bf46.js";
import "./QMarkupTable.4a713a4b.js";
import "./QSelect.d6f8aa01.js";
import "./QItemLabel.18ff4fa7.js";
import "./QMenu.d438562b.js";
import "./selection.31a8599a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d2ca0e81.js";
import "./use-fullscreen.14b2f495.js";
import "./axios.e833d5f6.js";
import "./debug.b9d7424b.js";
import "./help.6a218093.js";
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
