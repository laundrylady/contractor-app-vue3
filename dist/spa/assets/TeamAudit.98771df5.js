import { _ as _sfc_main$1 } from "./AuditTimeline.a4089e26.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.278ed024.js";
import "./QTd.44e80cea.js";
import "./format.bf501cd6.js";
import "./QList.14c9f71a.js";
import "./QTable.5800a56b.js";
import "./QMarkupTable.4166edf9.js";
import "./QSelect.762d0ed4.js";
import "./QItemLabel.f29b5802.js";
import "./selection.95f565e9.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.d15546c9.js";
import "./use-fullscreen.801a2d79.js";
import "./axios.a0bcf26d.js";
import "./debug.b9d7424b.js";
import "./help.0385a21b.js";
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
