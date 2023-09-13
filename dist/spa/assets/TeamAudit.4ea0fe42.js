import { _ as _sfc_main$1 } from "./AuditTimeline.4d27e747.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.a868d555.js";
import "./QTable.c251911b.js";
import "./QList.c5d665a0.js";
import "./QMarkupTable.7ac3ecec.js";
import "./QSelect.f4199137.js";
import "./selection.2e6c8ab7.js";
import "./QItemLabel.b4dfa054.js";
import "./QMenu.b68ab337.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c400dfe9.js";
import "./use-fullscreen.a5b41356.js";
import "./axios.a7f4982f.js";
import "./debug.ffa51329.js";
import "./help.d1a186e3.js";
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
