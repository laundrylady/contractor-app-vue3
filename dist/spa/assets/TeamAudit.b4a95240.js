import { _ as _sfc_main$1 } from "./AuditTimeline.88013a6c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ed5d663e.js";
import "./QTd.9f7dbb70.js";
import "./QItemSection.61f5d58a.js";
import "./QList.05992847.js";
import "./QTable.dd329327.js";
import "./QMarkupTable.22931246.js";
import "./QSelect.96d5c18b.js";
import "./QItemLabel.b7913740.js";
import "./QMenu.89657e64.js";
import "./selection.299d682c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b9e20d06.js";
import "./use-fullscreen.6a619d0e.js";
import "./axios.871fd6e3.js";
import "./debug.b9d7424b.js";
import "./help.61d9c350.js";
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
