import { _ as _sfc_main$1 } from "./AuditTimeline.b98924b0.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.87d3d2b7.js";
import "./QTd.8a1310db.js";
import "./selection.f52844c4.js";
import "./QList.d0bf9769.js";
import "./QTable.65964429.js";
import "./QMarkupTable.973bd70f.js";
import "./QSelect.b483704f.js";
import "./QItemLabel.c54ecb51.js";
import "./QMenu.6b0359c9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.25cfe5ba.js";
import "./use-fullscreen.2f975b38.js";
import "./axios.ed69c116.js";
import "./debug.972d445d.js";
import "./help.d3cdcc33.js";
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
