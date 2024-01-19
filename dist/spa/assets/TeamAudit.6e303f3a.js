import { _ as _sfc_main$1 } from "./AuditTimeline.6a74111c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.2a8b6235.js";
import "./QTd.7b246502.js";
import "./QItemSection.0eb83c6b.js";
import "./QList.90ff5062.js";
import "./QTable.cf1adce4.js";
import "./QMarkupTable.6f330643.js";
import "./QSelect.9a541b30.js";
import "./QItemLabel.8647561e.js";
import "./QMenu.daeaa8fa.js";
import "./selection.c8b2b5d8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.fbdc694d.js";
import "./use-fullscreen.8562bd47.js";
import "./axios.2ca873cc.js";
import "./debug.b9d7424b.js";
import "./help.f1df2904.js";
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
