import { _ as _sfc_main$1 } from "./AuditTimeline.b50171e4.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.09db86c6.js";
import "./QTable.ee3cea18.js";
import "./QList.ea43f186.js";
import "./QMarkupTable.319b04dd.js";
import "./QSelect.b914fb42.js";
import "./QItemSection.0ff59c1c.js";
import "./selection.b097d85c.js";
import "./QMenu.f4a75668.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.251b2a6a.js";
import "./use-fullscreen.197d76b4.js";
import "./axios.a630860f.js";
import "./debug.ffa51329.js";
import "./help.43e74e3a.js";
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
