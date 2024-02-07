import { _ as _sfc_main$1 } from "./AuditTimeline.50e882d0.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e779ed8f.js";
import "./QTd.79b023a8.js";
import "./QItemSection.f918b325.js";
import "./QList.d7a8620b.js";
import "./QTable.2d37b598.js";
import "./QMarkupTable.37c91a74.js";
import "./QSelect.efa5c686.js";
import "./QItemLabel.bc19708c.js";
import "./QMenu.cc9f3b0e.js";
import "./selection.c62381cb.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.8aba57b9.js";
import "./use-fullscreen.146fe1c2.js";
import "./axios.4751c363.js";
import "./debug.b9d7424b.js";
import "./help.1405747b.js";
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
