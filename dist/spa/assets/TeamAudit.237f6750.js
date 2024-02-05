import { _ as _sfc_main$1 } from "./AuditTimeline.401e1704.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ec82fb92.js";
import "./QTd.a288f68d.js";
import "./QItemSection.c8d52540.js";
import "./QList.3afe16e8.js";
import "./QTable.1052ce3a.js";
import "./QMarkupTable.6a8b8a7b.js";
import "./QSelect.e1a07e28.js";
import "./QItemLabel.51758fb1.js";
import "./QMenu.7e196ef1.js";
import "./selection.559d132e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0304ba2d.js";
import "./use-fullscreen.df83ed55.js";
import "./axios.866358de.js";
import "./debug.b9d7424b.js";
import "./help.78b0a1da.js";
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
