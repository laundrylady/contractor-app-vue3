import { _ as _sfc_main$1 } from "./AuditTimeline.8863f315.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.71993d48.js";
import "./QTd.86305763.js";
import "./QItemSection.9378edd4.js";
import "./QList.12464097.js";
import "./QTable.ebbebfb8.js";
import "./QMarkupTable.30cbefb6.js";
import "./QSelect.b8d67a6f.js";
import "./QItemLabel.4bbaac4c.js";
import "./QMenu.5c4bfec5.js";
import "./selection.648c4311.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.8291e299.js";
import "./use-fullscreen.21cf4df0.js";
import "./axios.d2172b6e.js";
import "./debug.b9d7424b.js";
import "./help.c9950071.js";
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
