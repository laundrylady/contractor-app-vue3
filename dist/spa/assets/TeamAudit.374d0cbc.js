import { _ as _sfc_main$1 } from "./AuditTimeline.300bde34.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.0a73f961.js";
import "./QTable.73ac5817.js";
import "./QList.79d8c960.js";
import "./QMarkupTable.02c9a459.js";
import "./QSelect.7216960a.js";
import "./selection.0f6039c3.js";
import "./QItemLabel.12f914f9.js";
import "./QMenu.44421817.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a4b46bca.js";
import "./use-fullscreen.56855fbd.js";
import "./axios.753e2493.js";
import "./debug.ffa51329.js";
import "./help.4d339a4c.js";
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
