import { _ as _sfc_main$1 } from "./AuditTimeline.1e55db34.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.91814ea0.js";
import "./QTd.596c3eb9.js";
import "./QItemSection.acd059d1.js";
import "./QList.a4df92c8.js";
import "./QTable.79e2f3b4.js";
import "./QMarkupTable.cccf3435.js";
import "./QSelect.b846cd5d.js";
import "./QItemLabel.8a3b2596.js";
import "./QMenu.eab3c346.js";
import "./selection.2903cd79.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.5bb25880.js";
import "./use-fullscreen.bdee086f.js";
import "./axios.ebe2df20.js";
import "./debug.b9d7424b.js";
import "./help.6f1743ae.js";
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
