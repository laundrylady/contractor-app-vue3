import { _ as _sfc_main$1 } from "./AuditTimeline.3dc0a62e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.08ad31cf.js";
import "./QTd.a6c3c6e5.js";
import "./QItemSection.cdb1f7d8.js";
import "./QList.44b519f3.js";
import "./QTable.fcc7e0d7.js";
import "./QMarkupTable.ede775f0.js";
import "./QSelect.d75a0a09.js";
import "./QItemLabel.1fa66a8b.js";
import "./QMenu.59d952ae.js";
import "./selection.17df0d0e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.51c3a5f4.js";
import "./use-fullscreen.ff480799.js";
import "./axios.d680332f.js";
import "./debug.b9d7424b.js";
import "./help.02e38e73.js";
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
