import { _ as _sfc_main$1 } from "./AuditTimeline.747d64a9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.420ace9d.js";
import "./QTd.672bd49a.js";
import "./QItemSection.7138275a.js";
import "./QList.94e247d9.js";
import "./QTable.d0d8ec50.js";
import "./QMarkupTable.c6436ea5.js";
import "./QSelect.291dd209.js";
import "./QItemLabel.4e161513.js";
import "./QMenu.51c92bb2.js";
import "./selection.eff96e95.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4b68ce73.js";
import "./use-fullscreen.625b7c38.js";
import "./axios.feaa9f76.js";
import "./debug.972d445d.js";
import "./help.f1ea19ef.js";
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
