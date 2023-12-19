import { _ as _sfc_main$1 } from "./AuditTimeline.037e2834.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.3b1f6dca.js";
import "./QTd.5fe3f540.js";
import "./QItemSection.19624de0.js";
import "./QList.d0ffde4f.js";
import "./QTable.bd2f2f50.js";
import "./QMarkupTable.33f300da.js";
import "./QSelect.5545e9cd.js";
import "./QItemLabel.054a644f.js";
import "./QMenu.1e7752f1.js";
import "./selection.29e02e4f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1409c9e3.js";
import "./use-fullscreen.e535228a.js";
import "./axios.306b0a63.js";
import "./debug.972d445d.js";
import "./help.cdbb3d30.js";
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
