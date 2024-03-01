import { _ as _sfc_main$1 } from "./AuditTimeline.942be1f5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.31045b05.js";
import "./QTd.b18d6e36.js";
import "./QItemSection.b30406d4.js";
import "./QList.aab0626c.js";
import "./QTable.53c9d1aa.js";
import "./QMarkupTable.1732d005.js";
import "./QSelect.cbe80149.js";
import "./QItemLabel.23106495.js";
import "./QMenu.ce1f7a40.js";
import "./selection.586c32ec.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1e9eb9ac.js";
import "./use-fullscreen.326b7fbb.js";
import "./axios.ff12253a.js";
import "./debug.b9d7424b.js";
import "./help.5be86c1c.js";
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
