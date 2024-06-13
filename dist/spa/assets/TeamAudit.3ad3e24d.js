import { _ as _sfc_main$1 } from "./AuditTimeline.bae59270.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.a50f0974.js";
import "./QTd.9dd60356.js";
import "./QItemSection.7d46b3d2.js";
import "./QList.bd61b03b.js";
import "./QTable.86572424.js";
import "./QMarkupTable.56ea2cf6.js";
import "./QSelect.ac3eca91.js";
import "./QItemLabel.88b8edd9.js";
import "./QMenu.089357e7.js";
import "./selection.59b1330f.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.f26df715.js";
import "./use-fullscreen.9d5ffbe5.js";
import "./axios.75f2feb3.js";
import "./debug.b9d7424b.js";
import "./help.67ed6268.js";
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
