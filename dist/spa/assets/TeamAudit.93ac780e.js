import { _ as _sfc_main$1 } from "./AuditTimeline.a7d26c20.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f668ef97.js";
import "./QTd.96f0d15f.js";
import "./QItemSection.d80474bd.js";
import "./QList.d9275854.js";
import "./QTable.dc241e65.js";
import "./QMarkupTable.0e150959.js";
import "./QSelect.0937f97b.js";
import "./QItemLabel.32bc7e20.js";
import "./QMenu.eb68df62.js";
import "./selection.ee9589e2.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.7ee1194e.js";
import "./use-fullscreen.01b6659f.js";
import "./axios.baad754f.js";
import "./debug.b9d7424b.js";
import "./help.6bbe450b.js";
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
