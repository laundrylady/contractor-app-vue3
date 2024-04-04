import { _ as _sfc_main$1 } from "./AuditTimeline.40ff6d36.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.02752fdf.js";
import "./QTd.e893e867.js";
import "./QItemSection.575c0d24.js";
import "./QList.00b0b4f6.js";
import "./QTable.ef4014e6.js";
import "./QMarkupTable.684971af.js";
import "./QSelect.6c30b80a.js";
import "./QItemLabel.984ed152.js";
import "./QMenu.fdd763cf.js";
import "./selection.e02dd1ff.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.081698fc.js";
import "./use-fullscreen.029473d0.js";
import "./axios.00cbe647.js";
import "./debug.b9d7424b.js";
import "./help.b70e499f.js";
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
