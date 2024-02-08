import { _ as _sfc_main$1 } from "./AuditTimeline.e17eeca6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e3419985.js";
import "./QTd.c98afbfb.js";
import "./QItemSection.1fc0a49d.js";
import "./QList.a723f46d.js";
import "./QTable.9cd4a8c1.js";
import "./QMarkupTable.31d1c5d9.js";
import "./QSelect.b6af758d.js";
import "./QItemLabel.7679e2d1.js";
import "./QMenu.be53e892.js";
import "./selection.1d356d17.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b992dd73.js";
import "./use-fullscreen.d339612e.js";
import "./axios.17d0f6a3.js";
import "./debug.b9d7424b.js";
import "./help.7ec1e35e.js";
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
