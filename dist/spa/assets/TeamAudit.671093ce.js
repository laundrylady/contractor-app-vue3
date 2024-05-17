import { _ as _sfc_main$1 } from "./AuditTimeline.6cf60b28.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9a11cf11.js";
import "./QTd.96857910.js";
import "./QItemSection.2309b52b.js";
import "./QList.6897626c.js";
import "./QTable.b1e4046d.js";
import "./QMarkupTable.c390c23d.js";
import "./QSelect.62377b0b.js";
import "./QItemLabel.cef8510d.js";
import "./QMenu.a1c0df01.js";
import "./selection.d8d985bb.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.80feccb0.js";
import "./use-fullscreen.e5e4dcf2.js";
import "./axios.21220e31.js";
import "./debug.b9d7424b.js";
import "./help.02aeb00c.js";
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
