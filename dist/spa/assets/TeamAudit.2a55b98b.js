import { _ as _sfc_main$1 } from "./AuditTimeline.e58fceff.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.370d568b.js";
import "./QTd.ce8cefd1.js";
import "./selection.86096579.js";
import "./QList.5eb6c5a3.js";
import "./QTable.5dba33db.js";
import "./QMarkupTable.b25e35ab.js";
import "./QSelect.4b2b6f1c.js";
import "./QItemLabel.f007e025.js";
import "./QMenu.f484e851.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.28fd3ac1.js";
import "./use-fullscreen.f983417c.js";
import "./axios.d95458b2.js";
import "./debug.b9d7424b.js";
import "./help.3de5c98f.js";
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
