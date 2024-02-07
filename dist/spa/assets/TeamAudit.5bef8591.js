import { _ as _sfc_main$1 } from "./AuditTimeline.bc2504b2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ae9373f8.js";
import "./QTd.20861bbb.js";
import "./QItemSection.ec329744.js";
import "./QList.ec9fcd66.js";
import "./QTable.fa28e3fb.js";
import "./QMarkupTable.b851d32f.js";
import "./QSelect.c1681cd1.js";
import "./QItemLabel.aa53f096.js";
import "./QMenu.79aff003.js";
import "./selection.33a56d83.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.9ccf62d3.js";
import "./use-fullscreen.06347866.js";
import "./axios.177cad41.js";
import "./debug.b9d7424b.js";
import "./help.f50b0519.js";
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
