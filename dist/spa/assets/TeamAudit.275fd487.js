import { _ as _sfc_main$1 } from "./AuditTimeline.ffaa3a14.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.5e60e5dd.js";
import "./QTd.00d81464.js";
import "./selection.a8b7d02c.js";
import "./QList.a558d9b9.js";
import "./QTable.13116d79.js";
import "./QMarkupTable.36bba7ac.js";
import "./QSelect.a20fa568.js";
import "./QItemLabel.1dd33933.js";
import "./QMenu.66896edd.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.253bf342.js";
import "./use-fullscreen.57e88ac4.js";
import "./axios.b8edb2e7.js";
import "./debug.972d445d.js";
import "./help.1e820813.js";
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
