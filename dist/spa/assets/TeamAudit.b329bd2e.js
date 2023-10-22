import { _ as _sfc_main$1 } from "./AuditTimeline.05ad3a98.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.92ab7041.js";
import "./QTd.c012504d.js";
import "./selection.def004c5.js";
import "./QList.5ae951e2.js";
import "./QTable.747a4838.js";
import "./QMarkupTable.f383e26a.js";
import "./QSelect.6963eaa7.js";
import "./QItemLabel.e90e0b6c.js";
import "./QMenu.067c58bc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.375bd2d2.js";
import "./use-fullscreen.d15bd625.js";
import "./axios.3f5535ab.js";
import "./debug.972d445d.js";
import "./help.c0f2021d.js";
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
