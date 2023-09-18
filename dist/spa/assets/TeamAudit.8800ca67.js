import { _ as _sfc_main$1 } from "./AuditTimeline.c5659237.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.6bc9da2c.js";
import "./QTd.a9920d07.js";
import "./selection.e81ada06.js";
import "./QList.717bbc17.js";
import "./QTable.68932e9b.js";
import "./QMarkupTable.23e5ddc7.js";
import "./QSelect.a5c2fbfb.js";
import "./QItemLabel.c0748dc1.js";
import "./QMenu.e11d66d0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.11b09821.js";
import "./use-fullscreen.0cb3dfb7.js";
import "./axios.d0b87e4b.js";
import "./debug.ffa51329.js";
import "./help.d97f77b7.js";
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
