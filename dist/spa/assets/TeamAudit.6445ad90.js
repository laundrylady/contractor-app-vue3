import { _ as _sfc_main$1 } from "./AuditTimeline.2751f0f9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.c9cb2a43.js";
import "./QTd.177b44f7.js";
import "./QItemSection.d838d8a6.js";
import "./QList.601a66e1.js";
import "./QTable.768ac9dc.js";
import "./QMarkupTable.cee96589.js";
import "./QSelect.37eea7df.js";
import "./QItemLabel.84260068.js";
import "./QMenu.085ebe20.js";
import "./selection.f00fc480.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f0f26f5f.js";
import "./use-fullscreen.c1b962a7.js";
import "./axios.65c4d83c.js";
import "./debug.b9d7424b.js";
import "./help.1e481d26.js";
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
