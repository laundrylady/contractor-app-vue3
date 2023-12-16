import { _ as _sfc_main$1 } from "./AuditTimeline.7eeb97c2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.7f74603c.js";
import "./QTd.fbefc905.js";
import "./QItemSection.4404f9eb.js";
import "./QList.f8018254.js";
import "./QTable.9f1e59a9.js";
import "./QMarkupTable.98878d0b.js";
import "./QSelect.f0b82b2c.js";
import "./QItemLabel.1bb03b44.js";
import "./QMenu.1913c653.js";
import "./selection.65320923.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b125a2c7.js";
import "./use-fullscreen.d195e904.js";
import "./axios.974431db.js";
import "./debug.972d445d.js";
import "./help.3b8bb69e.js";
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
