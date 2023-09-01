import { _ as _sfc_main$1 } from "./AuditTimeline.5e61e060.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.c8d47ef5.js";
import "./QTable.fc9ad5e6.js";
import "./QList.1476326b.js";
import "./QMarkupTable.d7024bbf.js";
import "./QSelect.99f12939.js";
import "./QItemSection.fc8141cf.js";
import "./selection.f35965d9.js";
import "./QMenu.c134495c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.edb11cb6.js";
import "./use-fullscreen.a40ee58d.js";
import "./axios.415142fa.js";
import "./debug.ffa51329.js";
import "./help.26cc6078.js";
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
