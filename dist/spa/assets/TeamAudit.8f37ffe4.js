import { _ as _sfc_main$1 } from "./AuditTimeline.f41672f2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f4eab609.js";
import "./QTd.cf4c42b6.js";
import "./QItemSection.69989551.js";
import "./QList.4ac1db95.js";
import "./QTable.0a3e678b.js";
import "./QMarkupTable.a5c2d271.js";
import "./QSelect.86621c8e.js";
import "./QItemLabel.9f5eb23d.js";
import "./QMenu.78f77972.js";
import "./selection.8f446b8f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a0b6fc32.js";
import "./use-fullscreen.c84f70be.js";
import "./axios.0f3969fa.js";
import "./debug.b9d7424b.js";
import "./help.2a2c0624.js";
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
