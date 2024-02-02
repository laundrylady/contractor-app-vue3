import { _ as _sfc_main$1 } from "./AuditTimeline.1839dae9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.84f10f3f.js";
import "./QTd.82a057fe.js";
import "./QItemSection.bb85dabb.js";
import "./QList.6cde1eb1.js";
import "./QTable.97a37a05.js";
import "./QMarkupTable.ec0874b5.js";
import "./QSelect.429e8d47.js";
import "./QItemLabel.44c04347.js";
import "./QMenu.bd1c4216.js";
import "./selection.1ac97dc8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d97fea42.js";
import "./use-fullscreen.e17cec5e.js";
import "./axios.0eb76a38.js";
import "./debug.b9d7424b.js";
import "./help.6ab24264.js";
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
