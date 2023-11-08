import { _ as _sfc_main$1 } from "./AuditTimeline.89984efc.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.1c3f43c8.js";
import "./QTd.0c448bb1.js";
import "./selection.86d747e5.js";
import "./QList.b8b2bfb8.js";
import "./QTable.15d440d6.js";
import "./QMarkupTable.5e83005c.js";
import "./QSelect.9179fadf.js";
import "./QItemLabel.832f641e.js";
import "./QMenu.9c9cfd8c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.7ed99f62.js";
import "./use-fullscreen.3da0ccd1.js";
import "./axios.bd02ada1.js";
import "./debug.972d445d.js";
import "./help.842e93c9.js";
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
