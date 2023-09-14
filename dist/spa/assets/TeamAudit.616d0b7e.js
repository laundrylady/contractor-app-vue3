import { _ as _sfc_main$1 } from "./AuditTimeline.97e170a7.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.2182576f.js";
import "./QTable.bbcf1d0a.js";
import "./QList.5b409a1a.js";
import "./QMarkupTable.7c3ace04.js";
import "./QSelect.136ed1bb.js";
import "./selection.f936c299.js";
import "./QItemLabel.1a6e9b1c.js";
import "./QMenu.6bcc5c7b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d95cc4ac.js";
import "./use-fullscreen.e3f1d044.js";
import "./axios.5a455801.js";
import "./debug.ffa51329.js";
import "./help.258f7feb.js";
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
