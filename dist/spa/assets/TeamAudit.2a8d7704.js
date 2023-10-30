import { _ as _sfc_main$1 } from "./AuditTimeline.cd7080c6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.644e4200.js";
import "./QTd.5dbb1c09.js";
import "./selection.9cd71d51.js";
import "./QList.7529ab5e.js";
import "./QTable.78a280ee.js";
import "./QMarkupTable.48f8f9e8.js";
import "./QSelect.ab5d7e64.js";
import "./QItemLabel.bd8cb11b.js";
import "./QMenu.48a0f8bf.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c047bc8d.js";
import "./use-fullscreen.18231a48.js";
import "./axios.6442d350.js";
import "./debug.972d445d.js";
import "./help.02d8b462.js";
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
