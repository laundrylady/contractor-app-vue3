import { _ as _sfc_main$1 } from "./AuditTimeline.1242e272.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.a37287a9.js";
import "./QTable.2a492f95.js";
import "./QList.23da097b.js";
import "./QMarkupTable.ce585d6f.js";
import "./QSelect.9115e8f5.js";
import "./selection.eccd99db.js";
import "./QItemLabel.67ea95ca.js";
import "./QMenu.a68496b1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.9cfcd9a7.js";
import "./use-fullscreen.1e08e4c2.js";
import "./axios.23406bb5.js";
import "./debug.ffa51329.js";
import "./help.9f462084.js";
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
