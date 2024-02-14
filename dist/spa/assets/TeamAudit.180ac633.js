import { _ as _sfc_main$1 } from "./AuditTimeline.9b6b31a2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.32bccbce.js";
import "./QTd.38466a2a.js";
import "./QItemSection.437dc834.js";
import "./QList.0ffd9025.js";
import "./QTable.0000a99b.js";
import "./QMarkupTable.ddca4317.js";
import "./QSelect.6a20dc53.js";
import "./QItemLabel.ab56b13a.js";
import "./QMenu.b6832301.js";
import "./selection.75eb489b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.9d166cd1.js";
import "./use-fullscreen.616ad35a.js";
import "./axios.3f62d8b6.js";
import "./debug.b9d7424b.js";
import "./help.857d118f.js";
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
