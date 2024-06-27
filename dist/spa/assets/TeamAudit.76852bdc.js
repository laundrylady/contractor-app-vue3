import { _ as _sfc_main$1 } from "./AuditTimeline.1fe88d4f.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.61f718f4.js";
import "./QTd.4abfc71b.js";
import "./selection.bb1e1937.js";
import "./QList.65801c1a.js";
import "./QTable.ad29a373.js";
import "./QMarkupTable.290badf3.js";
import "./QSelect.fe62b17e.js";
import "./QItemLabel.7f4bd5ac.js";
import "./QMenu.01d31f86.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.8262c887.js";
import "./use-fullscreen.90e7de83.js";
import "./axios.95ae57e8.js";
import "./debug.b9d7424b.js";
import "./help.76b493a3.js";
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
