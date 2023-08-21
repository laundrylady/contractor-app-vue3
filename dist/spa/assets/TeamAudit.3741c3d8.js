import { _ as _sfc_main$1 } from "./AuditTimeline.3f0f3d34.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.0a9ea33a.js";
import "./QTable.20c2119e.js";
import "./QList.125653f0.js";
import "./QMarkupTable.12906996.js";
import "./QSelect.60ccb65b.js";
import "./QItemSection.1b23b510.js";
import "./selection.963fd4f5.js";
import "./QMenu.704ea9b1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.21adcba5.js";
import "./use-fullscreen.fdd2ea18.js";
import "./axios.2d1b6d62.js";
import "./debug.ffa51329.js";
import "./help.ce523e76.js";
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
