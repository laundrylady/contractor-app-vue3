import { _ as _sfc_main$1 } from "./AuditTimeline.cf2707b0.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.46e0a30b.js";
import "./QTd.3c9db6b8.js";
import "./QItemSection.353b1459.js";
import "./QList.f64079fd.js";
import "./QTable.0886a27c.js";
import "./QMarkupTable.24236ea3.js";
import "./QSelect.6b710984.js";
import "./QItemLabel.9f7c9c71.js";
import "./QMenu.eccf08db.js";
import "./selection.7ea46a8f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d0b72ad6.js";
import "./use-fullscreen.bd0e41f1.js";
import "./axios.4c2d8dd7.js";
import "./debug.972d445d.js";
import "./help.c20d34e3.js";
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
