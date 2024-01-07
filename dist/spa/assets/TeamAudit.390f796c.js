import { _ as _sfc_main$1 } from "./AuditTimeline.f4d73ed2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.93cf3cda.js";
import "./QTd.7ee14b57.js";
import "./QItemSection.63606c3f.js";
import "./QList.e3021f79.js";
import "./QTable.5a6e5df7.js";
import "./QMarkupTable.33a0323d.js";
import "./QSelect.8252c684.js";
import "./QItemLabel.05a09278.js";
import "./QMenu.cb732040.js";
import "./selection.ab96e859.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0604660f.js";
import "./use-fullscreen.4c550c6d.js";
import "./axios.e339f967.js";
import "./debug.b9d7424b.js";
import "./help.7e800d81.js";
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
