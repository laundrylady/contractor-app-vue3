import { _ as _sfc_main$1 } from "./AuditTimeline.99a45750.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f1ef5c18.js";
import "./QTd.8b859673.js";
import "./format.112b0b04.js";
import "./QList.33849463.js";
import "./QTable.dd73dd59.js";
import "./QMarkupTable.7d79515f.js";
import "./QSelect.7bdfa10c.js";
import "./QItemLabel.cbfe5232.js";
import "./selection.96f195a3.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.57baf78e.js";
import "./use-fullscreen.3f4d6ef5.js";
import "./axios.db6f0581.js";
import "./debug.b9d7424b.js";
import "./help.1f3b93f2.js";
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
