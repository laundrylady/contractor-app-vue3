import { _ as _sfc_main$1 } from "./AuditTimeline.b719d897.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.d21e33cc.js";
import "./QTd.ce56fe5d.js";
import "./QItemSection.7dac666d.js";
import "./QList.a9392fd5.js";
import "./QTable.e2e9a4bb.js";
import "./QMarkupTable.f5b0afa0.js";
import "./QSelect.1bad7801.js";
import "./QItemLabel.3dfa783e.js";
import "./QMenu.1b135721.js";
import "./selection.cc5c466e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3a54bcb4.js";
import "./use-fullscreen.a02a15cf.js";
import "./axios.1457e981.js";
import "./debug.972d445d.js";
import "./help.f60883c6.js";
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
