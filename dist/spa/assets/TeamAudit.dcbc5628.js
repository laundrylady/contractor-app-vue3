import { _ as _sfc_main$1 } from "./AuditTimeline.8a4f02ca.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.d24090f9.js";
import "./QTd.aa3a74e4.js";
import "./selection.65db3133.js";
import "./QList.d829e119.js";
import "./QTable.42e9c911.js";
import "./QMarkupTable.1d278012.js";
import "./QSelect.f2db8adb.js";
import "./QItemLabel.4d6f9b5e.js";
import "./QMenu.58abcd6d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0e0ea0fe.js";
import "./use-fullscreen.14fb770f.js";
import "./axios.19035272.js";
import "./debug.972d445d.js";
import "./help.7cc62a8f.js";
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
