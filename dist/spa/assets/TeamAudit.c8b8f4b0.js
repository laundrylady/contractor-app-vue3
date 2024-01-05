import { _ as _sfc_main$1 } from "./AuditTimeline.91d1bbc1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.c225e500.js";
import "./QTd.f5ea89aa.js";
import "./format.7feb902a.js";
import "./QList.298fc167.js";
import "./QTable.ff79224f.js";
import "./QMarkupTable.2bec2c3f.js";
import "./QSelect.35b1ccfa.js";
import "./QItemLabel.8bc10967.js";
import "./selection.d979cdd8.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.34b11314.js";
import "./use-fullscreen.c2b40d2d.js";
import "./axios.34892c50.js";
import "./debug.b9d7424b.js";
import "./help.f922300f.js";
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
