import { _ as _sfc_main$1 } from "./AuditTimeline.91f3a349.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.47a08050.js";
import "./QTd.05f05adb.js";
import "./selection.427fd34c.js";
import "./QList.3b68cbed.js";
import "./QTable.e578b772.js";
import "./QMarkupTable.e606e451.js";
import "./QSelect.50ef15dc.js";
import "./QItemLabel.b98dd222.js";
import "./QMenu.97e4312a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.7c737ed4.js";
import "./use-fullscreen.ebc39933.js";
import "./axios.4c537ae9.js";
import "./debug.ffa51329.js";
import "./help.8408b1ce.js";
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
