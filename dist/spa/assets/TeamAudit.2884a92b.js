import { _ as _sfc_main$1 } from "./AuditTimeline.5d4af85c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.a9e72922.js";
import "./QTd.c3181d8a.js";
import "./QItemSection.2292a67b.js";
import "./QList.45d51efb.js";
import "./QTable.6e91f24a.js";
import "./QMarkupTable.b8a57a00.js";
import "./QSelect.a2c9b544.js";
import "./QItemLabel.ce5bdc9d.js";
import "./QMenu.c5bf345e.js";
import "./selection.ed28452f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.6d273969.js";
import "./use-fullscreen.b86b03c4.js";
import "./axios.c72b80e9.js";
import "./debug.972d445d.js";
import "./help.f24c7eca.js";
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
