import { _ as _sfc_main$1 } from "./AuditTimeline.bf078b27.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.b320c8ca.js";
import "./QTable.d4f43e78.js";
import "./QList.b5b9109a.js";
import "./QMarkupTable.90f28d12.js";
import "./QSelect.a53b0a68.js";
import "./QItemSection.370f32fe.js";
import "./rtl.20f006a8.js";
import "./format.8239da63.js";
import "./QLinearProgress.b986023f.js";
import "./use-fullscreen.414bafcc.js";
import "./axios.fb60ded3.js";
import "./debug.805a8aef.js";
import "./help.1102714b.js";
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
