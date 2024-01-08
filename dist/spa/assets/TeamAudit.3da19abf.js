import { _ as _sfc_main$1 } from "./AuditTimeline.7babd08f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.c08a4e10.js";
import "./QTd.82db19f2.js";
import "./QItemSection.097b085f.js";
import "./QList.4e067f16.js";
import "./QTable.e09a8c96.js";
import "./QMarkupTable.767357da.js";
import "./QSelect.6935652b.js";
import "./QItemLabel.84bbcc3d.js";
import "./QMenu.98c98c11.js";
import "./selection.c9e6c843.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d91a8eab.js";
import "./use-fullscreen.68775a7a.js";
import "./axios.f80a1a62.js";
import "./debug.b9d7424b.js";
import "./help.5a41e2ad.js";
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
