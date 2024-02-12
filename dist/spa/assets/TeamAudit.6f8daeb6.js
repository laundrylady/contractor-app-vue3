import { _ as _sfc_main$1 } from "./AuditTimeline.504b6782.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.89d87b9d.js";
import "./QTd.60631a3d.js";
import "./QItemSection.90c0765f.js";
import "./QList.00735a2f.js";
import "./QTable.ee95b41c.js";
import "./QMarkupTable.2da47f34.js";
import "./QSelect.c6231689.js";
import "./QItemLabel.f6f290c5.js";
import "./QMenu.a48b1832.js";
import "./selection.bf427183.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d9280ded.js";
import "./use-fullscreen.3e8298d1.js";
import "./axios.fda26b8c.js";
import "./debug.b9d7424b.js";
import "./help.61c01f78.js";
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
