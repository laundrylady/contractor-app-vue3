import { _ as _sfc_main$1 } from "./AuditTimeline.d06cac71.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.cfc8c6ea.js";
import "./QTd.206dc118.js";
import "./QItemSection.380c7e57.js";
import "./QList.b4201a4d.js";
import "./QTable.b58c2d64.js";
import "./QMarkupTable.ecabbd53.js";
import "./QSelect.2d6665f9.js";
import "./QItemLabel.d074345c.js";
import "./QMenu.9e107354.js";
import "./selection.fe20666e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.cb0415af.js";
import "./use-fullscreen.dea557d3.js";
import "./axios.d4c1dfac.js";
import "./debug.b9d7424b.js";
import "./help.3fb17df8.js";
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
