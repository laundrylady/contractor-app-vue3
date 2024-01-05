import { _ as _sfc_main$1 } from "./AuditTimeline.e5e84718.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.4d63580c.js";
import "./QTd.d1a72c12.js";
import "./format.eea8744c.js";
import "./QList.b2f00f55.js";
import "./QTable.8c01b04e.js";
import "./QMarkupTable.365e3f99.js";
import "./QSelect.1e082333.js";
import "./QItemLabel.9e02e9cb.js";
import "./selection.61bdbeb8.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.c141117e.js";
import "./use-fullscreen.b13201d6.js";
import "./axios.80bd9ce9.js";
import "./debug.b9d7424b.js";
import "./help.b5149410.js";
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
