import { _ as _sfc_main$1 } from "./AuditTimeline.c5e0fc35.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.b20dbd4f.js";
import "./QTd.5fb1302f.js";
import "./selection.f0b84c25.js";
import "./QList.d6e8eb69.js";
import "./QTable.a1976df7.js";
import "./QMarkupTable.0a33ddde.js";
import "./QSelect.7a749a7a.js";
import "./QItemLabel.a8305e21.js";
import "./QMenu.2b227eef.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0d8049b5.js";
import "./use-fullscreen.bf8ebfd8.js";
import "./axios.3b176db4.js";
import "./debug.ffa51329.js";
import "./help.64adccec.js";
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
