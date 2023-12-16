import { _ as _sfc_main$1 } from "./AuditTimeline.533aa2fb.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.961c39a4.js";
import "./QTd.cbfe1aea.js";
import "./QItemSection.064b3d7e.js";
import "./QList.8cbd4839.js";
import "./QTable.0364c19f.js";
import "./QMarkupTable.26f72625.js";
import "./QSelect.dcaf1933.js";
import "./QItemLabel.00cc2551.js";
import "./QMenu.6583c653.js";
import "./selection.85ecf339.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d5fb8014.js";
import "./use-fullscreen.3e9a1c97.js";
import "./axios.e9d6ab71.js";
import "./debug.972d445d.js";
import "./help.202f749e.js";
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
