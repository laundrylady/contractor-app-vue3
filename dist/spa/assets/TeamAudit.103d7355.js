import { _ as _sfc_main$1 } from "./AuditTimeline.a30dcdda.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.5c682f3f.js";
import "./QTd.ac56c7b4.js";
import "./QItemSection.5bb72ff5.js";
import "./QList.c01dc454.js";
import "./QTable.98baac87.js";
import "./QMarkupTable.3cb9c045.js";
import "./QSelect.eddff6de.js";
import "./QItemLabel.0738f754.js";
import "./QMenu.6dc20562.js";
import "./selection.c2557ac0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.128e1cb9.js";
import "./use-fullscreen.4209dc96.js";
import "./axios.ebe6c73b.js";
import "./debug.d3090ccd.js";
import "./help.b808a93e.js";
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
