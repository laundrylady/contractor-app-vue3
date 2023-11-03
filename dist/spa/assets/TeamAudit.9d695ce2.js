import { _ as _sfc_main$1 } from "./AuditTimeline.c6adf4e7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.dab5106a.js";
import "./QTd.df1b842c.js";
import "./selection.94631991.js";
import "./QList.00b0efce.js";
import "./QTable.1e9e508e.js";
import "./QMarkupTable.35bca243.js";
import "./QSelect.458f17c3.js";
import "./QItemLabel.d1e72a45.js";
import "./QMenu.0bf5e7da.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.8e99e26c.js";
import "./use-fullscreen.446b3232.js";
import "./axios.c4336e75.js";
import "./debug.972d445d.js";
import "./help.d32e816a.js";
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
