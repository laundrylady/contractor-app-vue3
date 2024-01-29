import { _ as _sfc_main$1 } from "./AuditTimeline.b98acbea.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e7178dde.js";
import "./QTd.6fd21d77.js";
import "./QItemSection.b38beb3e.js";
import "./QList.fa94ef50.js";
import "./QTable.4da9d8a4.js";
import "./QMarkupTable.7d7afe4a.js";
import "./QSelect.7f908ff0.js";
import "./QItemLabel.6e7dc56d.js";
import "./QMenu.e5677d05.js";
import "./selection.07622523.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.9ec06853.js";
import "./use-fullscreen.5af8e47a.js";
import "./axios.a7ba8fcf.js";
import "./debug.b9d7424b.js";
import "./help.8defe9f3.js";
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
