import { _ as _sfc_main$1 } from "./AuditTimeline.de5851dc.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9b8e3a41.js";
import "./QTd.480b39f6.js";
import "./selection.1e8dc3ac.js";
import "./QList.d693d19d.js";
import "./QTable.6dd9b676.js";
import "./QMarkupTable.fdb584a0.js";
import "./QSelect.f02499d2.js";
import "./QItemLabel.06bc1152.js";
import "./QMenu.2f87fb0a.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.555c5d4d.js";
import "./use-fullscreen.1030d459.js";
import "./axios.24410139.js";
import "./debug.b9d7424b.js";
import "./help.74fea236.js";
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
