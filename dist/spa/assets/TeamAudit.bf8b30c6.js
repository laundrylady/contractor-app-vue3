import { _ as _sfc_main$1 } from "./AuditTimeline.60ef728e.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.22c247c5.js";
import "./QTd.b1de6d7e.js";
import "./selection.81f39ecc.js";
import "./QList.790f249c.js";
import "./QTable.e9fbc621.js";
import "./QMarkupTable.5f34ca22.js";
import "./QSelect.fcf51174.js";
import "./QItemLabel.51d7ff89.js";
import "./QMenu.6154f6d6.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.4e62bea7.js";
import "./use-fullscreen.73df10f3.js";
import "./axios.5879e589.js";
import "./debug.b9d7424b.js";
import "./help.85d7bea2.js";
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
