import { _ as _sfc_main$1 } from "./AuditTimeline.0b73f8bd.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.97c2c6d1.js";
import "./QTd.c4e31207.js";
import "./QItemSection.f2e348a7.js";
import "./QList.a38dce86.js";
import "./QTable.eeeb72f9.js";
import "./QMarkupTable.57ae8111.js";
import "./QSelect.5af92377.js";
import "./QItemLabel.79ba59e5.js";
import "./QMenu.ea67b5ad.js";
import "./selection.4b973c29.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.88d354ea.js";
import "./use-fullscreen.a93965f7.js";
import "./axios.8cf8e3fb.js";
import "./debug.972d445d.js";
import "./help.c787d25e.js";
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
