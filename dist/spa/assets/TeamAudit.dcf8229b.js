import { _ as _sfc_main$1 } from "./AuditTimeline.e1896196.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.42122499.js";
import "./QTd.fe1374ca.js";
import "./QItemSection.e283e48f.js";
import "./QList.32fbfd22.js";
import "./QTable.b0f6e048.js";
import "./QMarkupTable.3501db00.js";
import "./QSelect.57d0fb4b.js";
import "./QItemLabel.cd1b1987.js";
import "./QMenu.3dd4b9ec.js";
import "./selection.d274c8a1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.14d28cbe.js";
import "./use-fullscreen.84660280.js";
import "./axios.610c3e32.js";
import "./debug.b9d7424b.js";
import "./help.debef161.js";
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
