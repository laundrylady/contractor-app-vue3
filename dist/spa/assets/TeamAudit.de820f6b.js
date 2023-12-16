import { _ as _sfc_main$1 } from "./AuditTimeline.39f89cc9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.3493713e.js";
import "./QTd.60652365.js";
import "./QItemSection.8042ade3.js";
import "./QList.210d0b48.js";
import "./QTable.4fcaa69e.js";
import "./QMarkupTable.4d70b6e7.js";
import "./QSelect.9408b07f.js";
import "./QItemLabel.fcab7aaf.js";
import "./QMenu.31c45b16.js";
import "./selection.119f4514.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1a07cbe0.js";
import "./use-fullscreen.aeb2e555.js";
import "./axios.51cbb93a.js";
import "./debug.972d445d.js";
import "./help.7d15b7b7.js";
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
