import { _ as _sfc_main$1 } from "./AuditTimeline.ae2a2360.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.720b4a5c.js";
import "./QTd.3a96212a.js";
import "./QItemSection.4511fc78.js";
import "./QList.a7144db4.js";
import "./QTable.ecb4d971.js";
import "./QMarkupTable.37755f2a.js";
import "./QSelect.222fe7ca.js";
import "./QItemLabel.e41b433a.js";
import "./QMenu.84897510.js";
import "./selection.7e914794.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.60c05025.js";
import "./use-fullscreen.97ad1f45.js";
import "./axios.6b82ea5b.js";
import "./debug.b9d7424b.js";
import "./help.4fff6941.js";
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
