import { _ as _sfc_main$1 } from "./AuditTimeline.dbfe9892.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.3e5b9003.js";
import "./QTd.ed092572.js";
import "./QItemSection.92fddb70.js";
import "./QList.b6b2ce02.js";
import "./QTable.c9ee905b.js";
import "./QMarkupTable.af1b5a0e.js";
import "./QSelect.4f2fc8f4.js";
import "./QItemLabel.5ef2da82.js";
import "./QMenu.2bbb5cbb.js";
import "./selection.d071096f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.e8bc2679.js";
import "./use-fullscreen.9105a6b5.js";
import "./axios.2cae4f8f.js";
import "./debug.b9d7424b.js";
import "./help.7fb2c0cb.js";
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
