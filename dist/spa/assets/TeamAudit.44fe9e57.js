import { _ as _sfc_main$1 } from "./AuditTimeline.75115cf6.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.215b345e.js";
import "./QTable.68bc7653.js";
import "./QList.b72ce648.js";
import "./QMarkupTable.fff23233.js";
import "./QSelect.c2766a19.js";
import "./selection.e4641002.js";
import "./QItemLabel.3b457a01.js";
import "./QMenu.2976f8ae.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d11af89a.js";
import "./use-fullscreen.fdd11b89.js";
import "./axios.97d585b0.js";
import "./debug.ffa51329.js";
import "./help.e965e5b7.js";
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
