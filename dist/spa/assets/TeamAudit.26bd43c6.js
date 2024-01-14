import { _ as _sfc_main$1 } from "./AuditTimeline.13a87a72.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.84fae5f5.js";
import "./QTd.b400daad.js";
import "./QItemSection.4b58462e.js";
import "./QList.2ea35998.js";
import "./QTable.47f7e83c.js";
import "./QMarkupTable.01d2b308.js";
import "./QSelect.475b8e0a.js";
import "./QItemLabel.f3630861.js";
import "./QMenu.f4739337.js";
import "./selection.e385e751.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.8b51937f.js";
import "./use-fullscreen.bf4d3b8a.js";
import "./axios.8eb63b42.js";
import "./debug.b9d7424b.js";
import "./help.41c94128.js";
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
