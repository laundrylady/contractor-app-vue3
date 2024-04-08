import { _ as _sfc_main$1 } from "./AuditTimeline.4039e291.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.d3156251.js";
import "./QTd.b1682a2f.js";
import "./QItemSection.33b73aea.js";
import "./QList.1af29f82.js";
import "./QTable.3be79a0b.js";
import "./QMarkupTable.86e06a5f.js";
import "./QSelect.79c41990.js";
import "./QItemLabel.d2e4be10.js";
import "./QMenu.9a6ce7df.js";
import "./selection.d391c5c4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c4fa5c48.js";
import "./use-fullscreen.4a42a3d8.js";
import "./axios.1f56604e.js";
import "./debug.b9d7424b.js";
import "./help.3c3ace11.js";
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
