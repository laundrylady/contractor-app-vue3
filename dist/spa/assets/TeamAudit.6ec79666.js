import { _ as _sfc_main$1 } from "./AuditTimeline.2533f0fe.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.2bb9246b.js";
import "./QTd.7ebce014.js";
import "./format.709f7a1b.js";
import "./QList.b5ce7ee6.js";
import "./QTable.f4793fe6.js";
import "./QMarkupTable.d088da80.js";
import "./QSelect.cabafb83.js";
import "./QItemLabel.ac9f8f0e.js";
import "./selection.9401b84a.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.d0b9495d.js";
import "./use-fullscreen.a97c0a09.js";
import "./axios.3b0e4c6b.js";
import "./debug.b9d7424b.js";
import "./help.251a7a52.js";
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
