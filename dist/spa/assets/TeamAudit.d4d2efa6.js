import { _ as _sfc_main$1 } from "./AuditTimeline.e3dea2b4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.7fc66124.js";
import "./QTd.a0397a2e.js";
import "./QItemSection.79f08f79.js";
import "./QList.563f6fab.js";
import "./QTable.b6cd6207.js";
import "./QMarkupTable.e9757e22.js";
import "./QSelect.cde7d355.js";
import "./QItemLabel.101b2284.js";
import "./QMenu.10dcc93b.js";
import "./selection.de0f0585.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1441f90b.js";
import "./use-fullscreen.de1e3c66.js";
import "./axios.a0405d7e.js";
import "./debug.972d445d.js";
import "./help.3bfda089.js";
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
