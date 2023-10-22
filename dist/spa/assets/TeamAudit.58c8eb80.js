import { _ as _sfc_main$1 } from "./AuditTimeline.15e56c92.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.250db7cb.js";
import "./QTd.92202043.js";
import "./selection.e239b0e2.js";
import "./QList.f7c16196.js";
import "./QTable.716ef000.js";
import "./QMarkupTable.c0562800.js";
import "./QSelect.704d2300.js";
import "./QItemLabel.8ca90bfa.js";
import "./QMenu.af746c65.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.834cc941.js";
import "./use-fullscreen.eeaab279.js";
import "./axios.ffd1dad3.js";
import "./debug.972d445d.js";
import "./help.9c7320a1.js";
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
