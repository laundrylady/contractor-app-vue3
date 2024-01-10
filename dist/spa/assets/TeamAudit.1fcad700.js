import { _ as _sfc_main$1 } from "./AuditTimeline.81e94c29.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.5de92a2b.js";
import "./QTd.2cbe4574.js";
import "./QItemSection.805a26d0.js";
import "./QList.79a00ed0.js";
import "./QTable.7c47a1d3.js";
import "./QMarkupTable.2d69a80e.js";
import "./QSelect.3038c863.js";
import "./QItemLabel.bd2fac45.js";
import "./QMenu.7a184e26.js";
import "./selection.a6faf749.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.9750c8e7.js";
import "./use-fullscreen.37f6214f.js";
import "./axios.af1016c8.js";
import "./debug.b9d7424b.js";
import "./help.97306336.js";
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
