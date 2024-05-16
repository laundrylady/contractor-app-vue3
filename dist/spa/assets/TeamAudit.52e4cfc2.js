import { _ as _sfc_main$1 } from "./AuditTimeline.4956685c.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.796300b2.js";
import "./QTd.443ecb96.js";
import "./QItemSection.37b2f889.js";
import "./QList.ca6991bd.js";
import "./QTable.4d792419.js";
import "./QMarkupTable.6d282bed.js";
import "./QSelect.437ea744.js";
import "./QItemLabel.f1084971.js";
import "./QMenu.18c21b53.js";
import "./selection.7aaacd8a.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.a4c8fc3b.js";
import "./use-fullscreen.6086a2d9.js";
import "./axios.e0dd89c3.js";
import "./debug.b9d7424b.js";
import "./help.396f7ad9.js";
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
