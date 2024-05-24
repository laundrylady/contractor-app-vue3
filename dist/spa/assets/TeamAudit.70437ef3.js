import { _ as _sfc_main$1 } from "./AuditTimeline.b6b7c298.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.0b09a5a3.js";
import "./QTd.9c6c067f.js";
import "./QItemSection.29c6a139.js";
import "./QList.badc74df.js";
import "./QTable.198d5655.js";
import "./QMarkupTable.76f69134.js";
import "./QSelect.50ff3f19.js";
import "./QItemLabel.46538de8.js";
import "./QMenu.f1d3622d.js";
import "./selection.f8508231.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.7dc2af46.js";
import "./use-fullscreen.ef9eb948.js";
import "./axios.37955361.js";
import "./debug.b9d7424b.js";
import "./help.03c96e57.js";
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
