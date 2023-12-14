import { _ as _sfc_main$1 } from "./AuditTimeline.66c93a5e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.3ebb8669.js";
import "./QTd.61538254.js";
import "./QItemSection.0f578e2c.js";
import "./QList.892642cf.js";
import "./QTable.e5c456fe.js";
import "./QMarkupTable.1e31a3be.js";
import "./QSelect.f9109c79.js";
import "./QItemLabel.883e39c9.js";
import "./QMenu.fceb93d6.js";
import "./selection.fa7fa18d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.bb2845c7.js";
import "./use-fullscreen.b854f054.js";
import "./axios.daed506c.js";
import "./debug.972d445d.js";
import "./help.e5545d22.js";
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
