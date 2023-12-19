import { _ as _sfc_main$1 } from "./AuditTimeline.c28b69a4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.36ffcf9b.js";
import "./QTd.3bdb7a25.js";
import "./QItemSection.30f99eb3.js";
import "./QList.2a640182.js";
import "./QTable.3460cabc.js";
import "./QMarkupTable.29ba1a9e.js";
import "./QSelect.c615a3ab.js";
import "./QItemLabel.06d297de.js";
import "./QMenu.e0177a67.js";
import "./selection.0c7ccc1b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3c0f7f84.js";
import "./use-fullscreen.827afacc.js";
import "./axios.ae54ae36.js";
import "./debug.972d445d.js";
import "./help.bf487f3c.js";
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
