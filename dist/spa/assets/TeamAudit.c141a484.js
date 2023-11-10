import { _ as _sfc_main$1 } from "./AuditTimeline.aafab0f8.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e2534425.js";
import "./QTd.72b519bc.js";
import "./selection.a9ed569b.js";
import "./QList.2756e54b.js";
import "./QTable.5e9c8a1c.js";
import "./QMarkupTable.987707f3.js";
import "./QSelect.9df665ea.js";
import "./QItemLabel.d2881aab.js";
import "./QMenu.37598d9b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.26ed8d58.js";
import "./use-fullscreen.2a20bee8.js";
import "./axios.d820b385.js";
import "./debug.972d445d.js";
import "./help.a87e60ea.js";
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
