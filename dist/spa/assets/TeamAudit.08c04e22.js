import { _ as _sfc_main$1 } from "./AuditTimeline.525b514a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.6acd2f95.js";
import "./QTd.1f114f6c.js";
import "./QItemSection.49f4722f.js";
import "./QList.806c8947.js";
import "./QTable.51223a8a.js";
import "./QMarkupTable.9bc27f3c.js";
import "./QSelect.86f54259.js";
import "./QItemLabel.2a427a06.js";
import "./QMenu.4d444796.js";
import "./selection.cf40296c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.e3cffa17.js";
import "./use-fullscreen.8643a0f8.js";
import "./axios.a11536c6.js";
import "./debug.b9d7424b.js";
import "./help.4555f504.js";
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
