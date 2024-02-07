import { _ as _sfc_main$1 } from "./AuditTimeline.ef528701.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.1eb7e0d4.js";
import "./QTd.b6ede73a.js";
import "./QItemSection.0a3073f2.js";
import "./QList.d89d0d51.js";
import "./QTable.ee41f881.js";
import "./QMarkupTable.02fca499.js";
import "./QSelect.fa861b56.js";
import "./QItemLabel.6e713f73.js";
import "./QMenu.0b4964dc.js";
import "./selection.5c6b169c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.32da5726.js";
import "./use-fullscreen.3e183592.js";
import "./axios.40586be7.js";
import "./debug.b9d7424b.js";
import "./help.21326656.js";
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
