import { _ as _sfc_main$1 } from "./AuditTimeline.c4d3d1b4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.83437ab4.js";
import "./QTd.7820f616.js";
import "./QItemSection.293df8f2.js";
import "./QList.07aafddb.js";
import "./QTable.7c7714e2.js";
import "./QMarkupTable.10d53d17.js";
import "./QSelect.7737430d.js";
import "./QItemLabel.f4bffbe6.js";
import "./QMenu.1ce168ce.js";
import "./selection.15c4a6c9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.51f1c00b.js";
import "./use-fullscreen.f3e3a5c0.js";
import "./axios.e2b068bb.js";
import "./debug.b9d7424b.js";
import "./help.2e094d94.js";
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
