import { _ as _sfc_main$1 } from "./AuditTimeline.963dfb16.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.1fffc460.js";
import "./QTd.265f9e1d.js";
import "./selection.e2a402a4.js";
import "./QList.20eb8605.js";
import "./QTable.1392a9c5.js";
import "./QMarkupTable.07cf3b8c.js";
import "./QSelect.b28ce4ba.js";
import "./QItemLabel.a0e0b136.js";
import "./QMenu.f24ff997.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.dfaeffa3.js";
import "./use-fullscreen.e2f8b279.js";
import "./axios.b822c0d0.js";
import "./debug.ffa51329.js";
import "./help.b605acf3.js";
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
