import { _ as _sfc_main$1 } from "./AuditTimeline.2a0affc3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.3c1ce126.js";
import "./QTd.4967872d.js";
import "./QItemSection.fadb38ff.js";
import "./QList.164bd35d.js";
import "./QTable.07d42032.js";
import "./QMarkupTable.2c8ed551.js";
import "./QSelect.bae8468b.js";
import "./QItemLabel.d71404be.js";
import "./QMenu.7e2b7e4a.js";
import "./selection.8c3533a6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.2406bd7e.js";
import "./use-fullscreen.d97c3efd.js";
import "./axios.a063f4ae.js";
import "./debug.972d445d.js";
import "./help.5a2f4e9c.js";
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
