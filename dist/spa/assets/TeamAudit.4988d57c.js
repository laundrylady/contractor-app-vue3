import { _ as _sfc_main$1 } from "./AuditTimeline.9038dff2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.6a0e49ef.js";
import "./QTd.6637a8a6.js";
import "./QItemSection.322b798b.js";
import "./QList.6c3ab040.js";
import "./QTable.773d842c.js";
import "./QMarkupTable.9475dbc2.js";
import "./QSelect.670b73c2.js";
import "./QItemLabel.c30e8810.js";
import "./QMenu.4cdb6815.js";
import "./selection.81608666.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.44d5e5bc.js";
import "./use-fullscreen.74d30cf7.js";
import "./axios.fb5a1a1c.js";
import "./debug.972d445d.js";
import "./help.01f01c96.js";
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
