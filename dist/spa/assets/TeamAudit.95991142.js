import { _ as _sfc_main$1 } from "./AuditTimeline.314bc257.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.9898674e.js";
import "./QTd.a7d47007.js";
import "./QItemSection.97e566b5.js";
import "./QList.d7109d2b.js";
import "./QTable.1500a187.js";
import "./QMarkupTable.76de88b3.js";
import "./QSelect.6019e1d1.js";
import "./QItemLabel.219778a9.js";
import "./QMenu.a30ff06a.js";
import "./selection.26965865.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d89607be.js";
import "./use-fullscreen.85ddcd6d.js";
import "./axios.35ec121e.js";
import "./debug.b9d7424b.js";
import "./help.94fed76f.js";
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
