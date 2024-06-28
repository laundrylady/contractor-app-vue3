import { _ as _sfc_main$1 } from "./AuditTimeline.99c36853.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.bffa8c3c.js";
import "./QTd.2d3956cb.js";
import "./selection.30294983.js";
import "./QList.9280b7fb.js";
import "./QTable.4234d9b0.js";
import "./QMarkupTable.5b2cb7a8.js";
import "./QSelect.bbd3cae6.js";
import "./QItemLabel.afd2234f.js";
import "./QMenu.0f25bc7d.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.cc2c4a27.js";
import "./use-fullscreen.7191c0c0.js";
import "./axios.f27ccc14.js";
import "./debug.b9d7424b.js";
import "./help.237e61c3.js";
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
