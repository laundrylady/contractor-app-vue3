import { _ as _sfc_main$1 } from "./AuditTimeline.d3c601b7.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.743d7681.js";
import "./QTable.ed4938f5.js";
import "./QList.9ba32f52.js";
import "./QMarkupTable.6eacd957.js";
import "./QSelect.dbc7f1c3.js";
import "./QItemSection.d4f7e02a.js";
import "./rtl.e9486434.js";
import "./format.99445b5f.js";
import "./QLinearProgress.b1cba332.js";
import "./use-fullscreen.86dbb208.js";
import "./axios.67dbaacc.js";
import "./debug.805a8aef.js";
import "./help.dfac819e.js";
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
