import { _ as _sfc_main$1 } from "./AuditTimeline.50027d83.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e951243a.js";
import "./QTd.f050f8ed.js";
import "./QItemSection.95a14dd1.js";
import "./QList.299f1528.js";
import "./QTable.01b40f6e.js";
import "./QMarkupTable.9b181b3a.js";
import "./QSelect.72f2a3a3.js";
import "./QItemLabel.59353e24.js";
import "./QMenu.09fbdff1.js";
import "./selection.308ec804.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.fa277b85.js";
import "./use-fullscreen.1faf54a3.js";
import "./axios.fd2a90d8.js";
import "./debug.972d445d.js";
import "./help.7cd45023.js";
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
