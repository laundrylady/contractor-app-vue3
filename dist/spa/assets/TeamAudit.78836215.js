import { _ as _sfc_main$1 } from "./AuditTimeline.75b3a2d7.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.f86c1423.js";
import "./QTd.a2f957c7.js";
import "./selection.5d4507f5.js";
import "./QList.7097a9ef.js";
import "./QTable.a8691ec0.js";
import "./QMarkupTable.2011a831.js";
import "./QSelect.821c56cf.js";
import "./QItemLabel.609aa7fc.js";
import "./QMenu.5ad66883.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.96484a09.js";
import "./use-fullscreen.756450d4.js";
import "./axios.fa55e436.js";
import "./debug.ffa51329.js";
import "./help.488c6294.js";
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
