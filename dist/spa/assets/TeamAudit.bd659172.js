import { _ as _sfc_main$1 } from "./AuditTimeline.22e9a9e1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.4a7ccaf8.js";
import "./QTd.dae3902a.js";
import "./QItemSection.5f64db8e.js";
import "./QList.3acdb976.js";
import "./QTable.6c588cf1.js";
import "./QMarkupTable.3190632b.js";
import "./QSelect.2cfdb3f1.js";
import "./QItemLabel.d059fb8c.js";
import "./QMenu.029e863a.js";
import "./selection.f84380d5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3cd818af.js";
import "./use-fullscreen.5e475baf.js";
import "./axios.f96e4130.js";
import "./debug.b9d7424b.js";
import "./help.a72f6e72.js";
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
