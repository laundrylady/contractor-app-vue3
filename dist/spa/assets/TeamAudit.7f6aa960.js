import { _ as _sfc_main$1 } from "./AuditTimeline.bc58f85d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.2661e1e7.js";
import "./QTd.3afa8c5c.js";
import "./QItemSection.b3248bef.js";
import "./QList.113acb99.js";
import "./QTable.9fc0c8f2.js";
import "./QMarkupTable.b8178953.js";
import "./QSelect.781095d9.js";
import "./QItemLabel.2a43aca6.js";
import "./QMenu.556c4290.js";
import "./selection.d4c8b7e4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.db3c3e3f.js";
import "./use-fullscreen.02be60a3.js";
import "./axios.9e225318.js";
import "./debug.b9d7424b.js";
import "./help.f7a23976.js";
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
