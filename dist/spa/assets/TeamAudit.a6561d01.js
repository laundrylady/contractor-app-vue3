import { _ as _sfc_main$1 } from "./AuditTimeline.dbc47dd4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.260f71e2.js";
import "./QTd.c278f8d1.js";
import "./selection.fe38b50b.js";
import "./QList.1cf863ed.js";
import "./QTable.e353b19c.js";
import "./QMarkupTable.4eb01451.js";
import "./QSelect.1b94314a.js";
import "./QItemLabel.d70e4500.js";
import "./QMenu.70dfa3d6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1972fda1.js";
import "./use-fullscreen.a375aebd.js";
import "./axios.15b401cf.js";
import "./debug.972d445d.js";
import "./help.aea4a3fa.js";
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
