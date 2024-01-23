import { _ as _sfc_main$1 } from "./AuditTimeline.cb0e6056.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ede44c03.js";
import "./QTd.3d39bc8a.js";
import "./QItemSection.c6fa25ab.js";
import "./QList.77b5e4f1.js";
import "./QTable.597b8059.js";
import "./QMarkupTable.13acfe45.js";
import "./QSelect.a7cf351c.js";
import "./QItemLabel.9a144642.js";
import "./QMenu.63baf54c.js";
import "./selection.9f41e8e1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.32b03ca3.js";
import "./use-fullscreen.904cc5dc.js";
import "./axios.e6d93a62.js";
import "./debug.b9d7424b.js";
import "./help.7e4090d7.js";
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
