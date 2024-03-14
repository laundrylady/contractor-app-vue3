import { _ as _sfc_main$1 } from "./AuditTimeline.741739c6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.944bfff3.js";
import "./QTd.25595683.js";
import "./QItemSection.48114b1b.js";
import "./QList.92347de5.js";
import "./QTable.95af2519.js";
import "./QMarkupTable.9361c1fd.js";
import "./QSelect.3ac0f2e2.js";
import "./QItemLabel.dd8ce5dc.js";
import "./QMenu.68175fbd.js";
import "./selection.4770d8d9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1322c577.js";
import "./use-fullscreen.42bcf791.js";
import "./axios.2dc359bb.js";
import "./debug.b9d7424b.js";
import "./help.b3e2d521.js";
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
