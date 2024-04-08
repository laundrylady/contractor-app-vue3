import { _ as _sfc_main$1 } from "./AuditTimeline.00456bd6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.102a095b.js";
import "./QTd.82eb5b21.js";
import "./QItemSection.a5e05406.js";
import "./QList.39a3f84d.js";
import "./QTable.ed2bfb69.js";
import "./QMarkupTable.20c5f4d2.js";
import "./QSelect.57e48f88.js";
import "./QItemLabel.649a3c36.js";
import "./QMenu.082303fa.js";
import "./selection.6f530ad9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.96016cd2.js";
import "./use-fullscreen.0d3fdc5d.js";
import "./axios.5e65f383.js";
import "./debug.b9d7424b.js";
import "./help.312020b7.js";
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
