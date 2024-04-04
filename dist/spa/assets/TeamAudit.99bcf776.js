import { _ as _sfc_main$1 } from "./AuditTimeline.438200f9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.cd25fff4.js";
import "./QTd.be048e83.js";
import "./QItemSection.5bb587ab.js";
import "./QList.3877f15f.js";
import "./QTable.64482e98.js";
import "./QMarkupTable.3184e7dd.js";
import "./QSelect.7f9db2ee.js";
import "./QItemLabel.0674434e.js";
import "./QMenu.ce7ca789.js";
import "./selection.4eae132e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.65be9189.js";
import "./use-fullscreen.779f7c41.js";
import "./axios.6a31f35c.js";
import "./debug.b9d7424b.js";
import "./help.668f771e.js";
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
