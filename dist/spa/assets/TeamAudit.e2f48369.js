import { _ as _sfc_main$1 } from "./AuditTimeline.8a23c949.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.eaa20375.js";
import "./QTd.d55814f1.js";
import "./QItemSection.88aaf570.js";
import "./QList.566c2f4d.js";
import "./QTable.7bd8a05c.js";
import "./QMarkupTable.60b87c55.js";
import "./QSelect.cfea1f9c.js";
import "./QItemLabel.2a2ce6a2.js";
import "./QMenu.f7a5e5fc.js";
import "./selection.008a7de8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f1a4914a.js";
import "./use-fullscreen.cc49ca27.js";
import "./axios.893b6184.js";
import "./debug.b9d7424b.js";
import "./help.62721eac.js";
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
