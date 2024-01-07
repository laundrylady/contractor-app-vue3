import { _ as _sfc_main$1 } from "./AuditTimeline.65487b70.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f1303de0.js";
import "./QTd.9f6666ab.js";
import "./QItemSection.c33c006e.js";
import "./QList.c126ab9e.js";
import "./QTable.8cbf4baf.js";
import "./QMarkupTable.42d4c22d.js";
import "./QSelect.edacc259.js";
import "./QItemLabel.28fdca70.js";
import "./QMenu.005f69e9.js";
import "./selection.1b85c8af.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.e87c3f3b.js";
import "./use-fullscreen.6119b2fc.js";
import "./axios.35485f2e.js";
import "./debug.b9d7424b.js";
import "./help.3fa7b058.js";
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
