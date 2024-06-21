import { _ as _sfc_main$1 } from "./AuditTimeline.3e76d7b1.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f4154b53.js";
import "./QTd.2bbaebab.js";
import "./selection.f8026f5e.js";
import "./QList.2c63e15c.js";
import "./QTable.7368cfb0.js";
import "./QMarkupTable.89603fb1.js";
import "./QSelect.a5ed117f.js";
import "./QItemLabel.4f1c6239.js";
import "./QMenu.48688247.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.17a0781c.js";
import "./use-fullscreen.4ce95169.js";
import "./axios.8226f3dd.js";
import "./debug.b9d7424b.js";
import "./help.64b1e895.js";
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
