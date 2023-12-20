import { _ as _sfc_main$1 } from "./AuditTimeline.08efd0af.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.8edaef54.js";
import "./QTd.6bb68aa5.js";
import "./QItemSection.132f5471.js";
import "./QList.1a9a08e4.js";
import "./QTable.60de87cf.js";
import "./QMarkupTable.b1f4bfc2.js";
import "./QSelect.7e195314.js";
import "./QItemLabel.9fad2339.js";
import "./QMenu.04573aab.js";
import "./selection.42f680f5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d06e9d57.js";
import "./use-fullscreen.8f4f1306.js";
import "./axios.5ff0c671.js";
import "./debug.972d445d.js";
import "./help.7e84324c.js";
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
