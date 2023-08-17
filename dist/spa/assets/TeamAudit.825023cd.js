import { _ as _sfc_main$1 } from "./AuditTimeline.2b829ec6.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.b831cb22.js";
import "./QTable.218b6a4f.js";
import "./QList.6332f811.js";
import "./QMarkupTable.097c9cfc.js";
import "./QSelect.9dc7a6c7.js";
import "./QItemSection.4ac56135.js";
import "./selection.4cb35218.js";
import "./QMenu.af8e1e92.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d46b9629.js";
import "./use-fullscreen.1db19e64.js";
import "./axios.68b9268b.js";
import "./debug.ffa51329.js";
import "./help.e6021a60.js";
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
