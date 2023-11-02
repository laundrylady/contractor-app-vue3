import { _ as _sfc_main$1 } from "./AuditTimeline.3320ca09.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.df2fd7d3.js";
import "./QTd.eb22b15b.js";
import "./selection.90f9342d.js";
import "./QList.e550f401.js";
import "./QTable.086c5de5.js";
import "./QMarkupTable.051508f1.js";
import "./QSelect.d7e689f3.js";
import "./QItemLabel.1f843da5.js";
import "./QMenu.0c126a98.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.30fd4123.js";
import "./use-fullscreen.c5a41eea.js";
import "./axios.70eadaf1.js";
import "./debug.972d445d.js";
import "./help.5e924469.js";
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
