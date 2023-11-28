import { _ as _sfc_main$1 } from "./AuditTimeline.72467fe4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.2c4e0f9e.js";
import "./QTd.fc8f0d59.js";
import "./QItemSection.9511d199.js";
import "./QList.8698b3dc.js";
import "./QTable.20fca1ab.js";
import "./QMarkupTable.0ef714ac.js";
import "./QSelect.5ff94a5e.js";
import "./QItemLabel.d1fe833d.js";
import "./QMenu.95505b86.js";
import "./selection.1073a799.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.28a0e1ce.js";
import "./use-fullscreen.b7857018.js";
import "./axios.cd986332.js";
import "./debug.972d445d.js";
import "./help.36b5fb1a.js";
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
