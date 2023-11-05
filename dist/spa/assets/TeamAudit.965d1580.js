import { _ as _sfc_main$1 } from "./AuditTimeline.7bc23bd3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.478bbc7a.js";
import "./QTd.a6876c23.js";
import "./selection.22ac538d.js";
import "./QList.d598c41c.js";
import "./QTable.702d13f1.js";
import "./QMarkupTable.d2a0d2b5.js";
import "./QSelect.0bd0fe6e.js";
import "./QItemLabel.77035536.js";
import "./QMenu.50564840.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3b4bdf20.js";
import "./use-fullscreen.2812cc7f.js";
import "./axios.5015493e.js";
import "./debug.972d445d.js";
import "./help.ffa7deb9.js";
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
