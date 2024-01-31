import { _ as _sfc_main$1 } from "./AuditTimeline.2bf8490d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.ce2171c7.js";
import "./QTd.63198b1b.js";
import "./QItemSection.a7d2769c.js";
import "./QList.4a588e1c.js";
import "./QTable.79304b54.js";
import "./QMarkupTable.9618e4f3.js";
import "./QSelect.79071751.js";
import "./QItemLabel.1fdb24b8.js";
import "./QMenu.3272b5a7.js";
import "./selection.90670d13.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d0d51163.js";
import "./use-fullscreen.51c6ec4e.js";
import "./axios.e42b26c9.js";
import "./debug.b9d7424b.js";
import "./help.955839a9.js";
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
