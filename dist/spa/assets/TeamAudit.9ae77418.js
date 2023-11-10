import { _ as _sfc_main$1 } from "./AuditTimeline.937dd728.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.0095e572.js";
import "./QTd.6bf64332.js";
import "./selection.c2acc0d2.js";
import "./QList.74ad8538.js";
import "./QTable.44371d61.js";
import "./QMarkupTable.93811146.js";
import "./QSelect.56e6ee3f.js";
import "./QItemLabel.fd9abae6.js";
import "./QMenu.11ae87e4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.400d6087.js";
import "./use-fullscreen.28b7f5e4.js";
import "./axios.fc6bc4c0.js";
import "./debug.972d445d.js";
import "./help.667e8e69.js";
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
