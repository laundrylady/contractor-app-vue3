import { _ as _sfc_main$1 } from "./AuditTimeline.8ace5763.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.88cb70e0.js";
import "./QTd.523a7c04.js";
import "./QItemSection.6791e074.js";
import "./QList.d5ad5eed.js";
import "./QTable.d46f4b08.js";
import "./QMarkupTable.59c2e6e6.js";
import "./QSelect.e751b313.js";
import "./QItemLabel.e1f22c7c.js";
import "./QMenu.8216871e.js";
import "./selection.2115d5cc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b4dd1c0a.js";
import "./use-fullscreen.19be4211.js";
import "./axios.9c2c3a49.js";
import "./debug.972d445d.js";
import "./help.bd514665.js";
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
