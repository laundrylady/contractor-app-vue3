import { _ as _sfc_main$1 } from "./AuditTimeline.747828af.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.0e8eff46.js";
import "./QTd.03638c1a.js";
import "./QItemSection.2576283a.js";
import "./QList.60da52b1.js";
import "./QTable.8878ceaf.js";
import "./QMarkupTable.c444eb55.js";
import "./QSelect.bbed4941.js";
import "./QItemLabel.9fe3a93e.js";
import "./QMenu.dc565f24.js";
import "./selection.3f803eae.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.0189d586.js";
import "./use-fullscreen.3a8a816d.js";
import "./axios.8c9aa2c6.js";
import "./debug.b9d7424b.js";
import "./help.51652874.js";
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
