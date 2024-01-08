import { _ as _sfc_main$1 } from "./AuditTimeline.d2d7ab39.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.a20363ca.js";
import "./QTd.87f3ab49.js";
import "./QItemSection.2a4bb05f.js";
import "./QList.469e3432.js";
import "./QTable.f5d1834a.js";
import "./QMarkupTable.6e0340cb.js";
import "./QSelect.e90ede9e.js";
import "./QItemLabel.7a4ee620.js";
import "./QMenu.a509643f.js";
import "./selection.78cf4f0a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f8cf645c.js";
import "./use-fullscreen.105ab777.js";
import "./axios.9b3853d0.js";
import "./debug.b9d7424b.js";
import "./help.8cba200d.js";
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
