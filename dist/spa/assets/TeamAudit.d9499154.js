import { _ as _sfc_main$1 } from "./AuditTimeline.9ee36333.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f3826b35.js";
import "./QTd.4137564b.js";
import "./QItemSection.cc0d0b61.js";
import "./QList.8ab39670.js";
import "./QTable.e9a94727.js";
import "./QMarkupTable.d523c261.js";
import "./QSelect.9148827d.js";
import "./QItemLabel.8ea3d53c.js";
import "./QMenu.7ce22bf8.js";
import "./selection.baeadaa7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.5130c9be.js";
import "./use-fullscreen.e3b182fc.js";
import "./axios.afd10d98.js";
import "./debug.972d445d.js";
import "./help.bbbdd6ab.js";
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
