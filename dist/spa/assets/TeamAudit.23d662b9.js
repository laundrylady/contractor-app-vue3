import { _ as _sfc_main$1 } from "./AuditTimeline.57fe5143.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.290e3c5e.js";
import "./QTd.c12be700.js";
import "./QItemSection.4ce98ef3.js";
import "./QList.cd9d8591.js";
import "./QTable.2fc3e94b.js";
import "./QMarkupTable.2a7c5215.js";
import "./QSelect.579d628c.js";
import "./QItemLabel.1207aab3.js";
import "./QMenu.393db709.js";
import "./selection.9e01fae7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b9a5540c.js";
import "./use-fullscreen.9bf43af8.js";
import "./axios.d208aa5d.js";
import "./debug.972d445d.js";
import "./help.7b0dfe1f.js";
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
