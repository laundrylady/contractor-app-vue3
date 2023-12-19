import { _ as _sfc_main$1 } from "./AuditTimeline.0cae370d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.b933ddc7.js";
import "./QTd.118c335d.js";
import "./QItemSection.541395cc.js";
import "./QList.0e92e88d.js";
import "./QTable.b9016f2e.js";
import "./QMarkupTable.857d6778.js";
import "./QSelect.2e393bff.js";
import "./QItemLabel.1e5d20ef.js";
import "./QMenu.80fdd35e.js";
import "./selection.a38a2ac7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.235efbed.js";
import "./use-fullscreen.f6213573.js";
import "./axios.cc67cde9.js";
import "./debug.972d445d.js";
import "./help.cac0f575.js";
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
