import { _ as _sfc_main$1 } from "./AuditTimeline.d3b2a151.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.208ac1b0.js";
import "./QTd.744c2900.js";
import "./QItemSection.cb2021ac.js";
import "./QList.6ca84d7d.js";
import "./QTable.2e7a4d62.js";
import "./QMarkupTable.92e31526.js";
import "./QSelect.bc6f41c6.js";
import "./QItemLabel.68baf2c5.js";
import "./QMenu.301576a0.js";
import "./selection.e6b30987.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0a9b3381.js";
import "./use-fullscreen.6944e39f.js";
import "./axios.affd6c01.js";
import "./debug.972d445d.js";
import "./help.6314cd47.js";
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
