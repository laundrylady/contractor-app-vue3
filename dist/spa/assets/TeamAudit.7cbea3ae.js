import { _ as _sfc_main$1 } from "./AuditTimeline.86248c0f.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.33efd2c0.js";
import "./QTd.60d70f31.js";
import "./selection.0fb4403c.js";
import "./QList.e84d88c7.js";
import "./QTable.afb41da7.js";
import "./QMarkupTable.a4134f30.js";
import "./QSelect.827a16bd.js";
import "./QItemLabel.8bacf85f.js";
import "./QMenu.a4de9523.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.85fd5626.js";
import "./use-fullscreen.b3ad25cf.js";
import "./axios.a29d89a0.js";
import "./debug.b9d7424b.js";
import "./help.e79d09e0.js";
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
