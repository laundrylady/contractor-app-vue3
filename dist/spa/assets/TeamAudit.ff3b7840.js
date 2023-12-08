import { _ as _sfc_main$1 } from "./AuditTimeline.d8dab468.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.3f86858d.js";
import "./QTd.c476b9be.js";
import "./QItemSection.a3ff7647.js";
import "./QList.59a6b87b.js";
import "./QTable.a5dd68b6.js";
import "./QMarkupTable.2f85fb62.js";
import "./QSelect.154dcb87.js";
import "./QItemLabel.9b951f4a.js";
import "./QMenu.63bb0d4f.js";
import "./selection.0f570696.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.aabd49be.js";
import "./use-fullscreen.c3b95283.js";
import "./axios.cff98580.js";
import "./debug.972d445d.js";
import "./help.5e478062.js";
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
