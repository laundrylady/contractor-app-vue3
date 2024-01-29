import { _ as _sfc_main$1 } from "./AuditTimeline.4122f5db.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.bb02fd1d.js";
import "./QTd.a0fe7a61.js";
import "./QItemSection.de19139f.js";
import "./QList.c9ab0266.js";
import "./QTable.bc678cbc.js";
import "./QMarkupTable.0f18a815.js";
import "./QSelect.d95f058c.js";
import "./QItemLabel.cc28cd73.js";
import "./QMenu.4b0088a6.js";
import "./selection.eda2ec96.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.050e2423.js";
import "./use-fullscreen.fc0a4665.js";
import "./axios.c967a096.js";
import "./debug.b9d7424b.js";
import "./help.9d09ced6.js";
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
