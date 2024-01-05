import { _ as _sfc_main$1 } from "./AuditTimeline.46e5210c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ee12a592.js";
import "./QTd.e167986d.js";
import "./format.d4b40f43.js";
import "./QList.1f66b57d.js";
import "./QTable.61791e9e.js";
import "./QMarkupTable.f44e541f.js";
import "./QSelect.fa2299bd.js";
import "./QItemLabel.3e29a216.js";
import "./selection.d631ed63.js";
import "./rtl.b51694b1.js";
import "./QLinearProgress.31ce63c8.js";
import "./use-fullscreen.f32f43cf.js";
import "./axios.107ae729.js";
import "./debug.b9d7424b.js";
import "./help.b6aa185d.js";
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
