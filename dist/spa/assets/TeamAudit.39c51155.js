import { _ as _sfc_main$1 } from "./AuditTimeline.24778558.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.63251f47.js";
import "./QTd.3185f260.js";
import "./selection.8b22f19f.js";
import "./QList.d50b1a6a.js";
import "./QTable.e27c35fa.js";
import "./QMarkupTable.f549cfc3.js";
import "./QSelect.b1327776.js";
import "./QItemLabel.5719771f.js";
import "./QMenu.f57f59d0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4e6c23eb.js";
import "./use-fullscreen.77851ff3.js";
import "./axios.ea3e5b05.js";
import "./debug.972d445d.js";
import "./help.2c124571.js";
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
