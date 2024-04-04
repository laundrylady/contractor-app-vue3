import { _ as _sfc_main$1 } from "./AuditTimeline.c2f27cc4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.1962d2ae.js";
import "./QTd.253e6697.js";
import "./QItemSection.27e965ab.js";
import "./QList.468eae41.js";
import "./QTable.ef535a03.js";
import "./QMarkupTable.ea415df9.js";
import "./QSelect.588e498c.js";
import "./QItemLabel.6b198e0f.js";
import "./QMenu.f8889ea8.js";
import "./selection.48aa2add.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.7695f0df.js";
import "./use-fullscreen.700ae56b.js";
import "./axios.7f94127f.js";
import "./debug.b9d7424b.js";
import "./help.70a262df.js";
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
