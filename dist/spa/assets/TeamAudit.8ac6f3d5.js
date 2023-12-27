import { _ as _sfc_main$1 } from "./AuditTimeline.f0d23bbf.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e10d985a.js";
import "./QTd.8da700be.js";
import "./QItemSection.79ac2f17.js";
import "./QList.451f9f00.js";
import "./QTable.d0a0a50d.js";
import "./QMarkupTable.69ebeb35.js";
import "./QSelect.42b6d6ed.js";
import "./QItemLabel.6b47c22a.js";
import "./QMenu.42feefcc.js";
import "./selection.8ef2ad40.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c610e664.js";
import "./use-fullscreen.f8b09894.js";
import "./axios.d600ee85.js";
import "./debug.b9d7424b.js";
import "./help.d45fbea6.js";
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
