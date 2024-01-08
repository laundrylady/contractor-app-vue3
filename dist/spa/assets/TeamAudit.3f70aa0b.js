import { _ as _sfc_main$1 } from "./AuditTimeline.9b905e30.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.bb082a98.js";
import "./QTd.8f569512.js";
import "./QItemSection.c390f765.js";
import "./QList.86a8068e.js";
import "./QTable.5d7800f2.js";
import "./QMarkupTable.52ab0c96.js";
import "./QSelect.09b8065a.js";
import "./QItemLabel.b2006bcf.js";
import "./QMenu.76fab67d.js";
import "./selection.bfc2e834.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.8f52c73b.js";
import "./use-fullscreen.e322738a.js";
import "./axios.847c91ae.js";
import "./debug.b9d7424b.js";
import "./help.08f82b20.js";
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
