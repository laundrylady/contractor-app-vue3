import { _ as _sfc_main$1 } from "./AuditTimeline.de5a93df.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.7dc3575e.js";
import "./QTd.a2943cc5.js";
import "./QItemSection.9fd3d4de.js";
import "./QList.1b05cca7.js";
import "./QTable.b6aca402.js";
import "./QMarkupTable.6ae5d034.js";
import "./QSelect.1ac73f3f.js";
import "./QItemLabel.62281547.js";
import "./QMenu.8461399f.js";
import "./selection.efa8343e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.e3921e7a.js";
import "./use-fullscreen.067d6d97.js";
import "./axios.f968c8b5.js";
import "./debug.b9d7424b.js";
import "./help.bc4499e5.js";
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
