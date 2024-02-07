import { _ as _sfc_main$1 } from "./AuditTimeline.1dbb4692.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.d0f04a73.js";
import "./QTd.1055e2f1.js";
import "./QItemSection.0013a550.js";
import "./QList.1fec112f.js";
import "./QTable.02c69606.js";
import "./QMarkupTable.9edbe906.js";
import "./QSelect.5e8a10a7.js";
import "./QItemLabel.f6572a99.js";
import "./QMenu.16247508.js";
import "./selection.c78f3754.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.525cf19d.js";
import "./use-fullscreen.260513ae.js";
import "./axios.ce036634.js";
import "./debug.b9d7424b.js";
import "./help.c3afdf0b.js";
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
