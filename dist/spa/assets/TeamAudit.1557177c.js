import { _ as _sfc_main$1 } from "./AuditTimeline.270e067b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9b8b7269.js";
import "./QTd.4d6e6a15.js";
import "./QItemSection.53b57c9f.js";
import "./QList.bf44c184.js";
import "./QTable.4c46723a.js";
import "./QMarkupTable.406897fe.js";
import "./QSelect.2e86e4ba.js";
import "./QItemLabel.544f2a72.js";
import "./QMenu.7793a0ce.js";
import "./selection.4a77bd85.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.673aedc8.js";
import "./use-fullscreen.e3125336.js";
import "./axios.c3179b68.js";
import "./debug.b9d7424b.js";
import "./help.d206c0e0.js";
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
