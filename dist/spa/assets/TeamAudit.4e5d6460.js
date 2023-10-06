import { _ as _sfc_main$1 } from "./AuditTimeline.7a2b1de1.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.13e68509.js";
import "./QTd.c07cf09b.js";
import "./selection.eb5b790c.js";
import "./QList.87986894.js";
import "./QTable.449650b7.js";
import "./QMarkupTable.fa4c9fe4.js";
import "./QSelect.916bda6c.js";
import "./QItemLabel.f6bdc4d3.js";
import "./QMenu.d1a86981.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.35cab95f.js";
import "./use-fullscreen.070b00ba.js";
import "./axios.a727fc80.js";
import "./debug.ffa51329.js";
import "./help.cca23e83.js";
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
