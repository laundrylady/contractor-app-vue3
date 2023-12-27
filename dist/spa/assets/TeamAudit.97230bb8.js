import { _ as _sfc_main$1 } from "./AuditTimeline.2b3c670a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ceae6044.js";
import "./QTd.853c7085.js";
import "./QItemSection.d03e362e.js";
import "./QList.be12ee7b.js";
import "./QTable.d316a9f8.js";
import "./QMarkupTable.2d701619.js";
import "./QSelect.247a3875.js";
import "./QItemLabel.783f36f9.js";
import "./QMenu.b7955310.js";
import "./selection.bd6e29b5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.ccc793b3.js";
import "./use-fullscreen.3ad7be70.js";
import "./axios.44b80d5e.js";
import "./debug.b9d7424b.js";
import "./help.f2b83c8e.js";
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
