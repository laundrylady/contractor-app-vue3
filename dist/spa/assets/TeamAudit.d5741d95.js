import { _ as _sfc_main$1 } from "./AuditTimeline.66ec5550.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9d209411.js";
import "./QTd.8dd01fd3.js";
import "./QItemSection.9dfc9174.js";
import "./QList.d72596b3.js";
import "./QTable.7818d624.js";
import "./QMarkupTable.29ad7eae.js";
import "./QSelect.35b85a20.js";
import "./QItemLabel.9fccdf4f.js";
import "./QMenu.12e99d26.js";
import "./selection.2937e51d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.406f2c41.js";
import "./use-fullscreen.3fa215bd.js";
import "./axios.3379d02c.js";
import "./debug.972d445d.js";
import "./help.f0fd5515.js";
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
