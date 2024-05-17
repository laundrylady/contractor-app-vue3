import { _ as _sfc_main$1 } from "./AuditTimeline.6949fd84.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.7a6165bd.js";
import "./QTd.b7266111.js";
import "./QItemSection.272e2acd.js";
import "./QList.4f5a733b.js";
import "./QTable.859976e4.js";
import "./QMarkupTable.3928dde1.js";
import "./QSelect.c17ea5e8.js";
import "./QItemLabel.aa1431ca.js";
import "./QMenu.3507a2f1.js";
import "./selection.0a13c517.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.19e05036.js";
import "./use-fullscreen.e71ca2a3.js";
import "./axios.2fe39f73.js";
import "./debug.b9d7424b.js";
import "./help.9711ed7e.js";
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
