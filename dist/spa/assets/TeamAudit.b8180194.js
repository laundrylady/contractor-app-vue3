import { _ as _sfc_main$1 } from "./AuditTimeline.72cb9114.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.11e648ff.js";
import "./QTd.1a6f3758.js";
import "./QItemSection.ba4339bd.js";
import "./QList.c6522f05.js";
import "./QTable.0209b06b.js";
import "./QMarkupTable.523b76dd.js";
import "./QSelect.cc074eb5.js";
import "./QItemLabel.7e75858c.js";
import "./QMenu.3fa36ddd.js";
import "./selection.bd155836.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d28cfda0.js";
import "./use-fullscreen.e94de5ad.js";
import "./axios.efb799cd.js";
import "./debug.972d445d.js";
import "./help.7f224dfe.js";
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
