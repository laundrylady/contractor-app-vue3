import { _ as _sfc_main$1 } from "./AuditTimeline.e9aa9eee.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.538c925c.js";
import "./QTd.ce64a92f.js";
import "./QItemSection.ac035b32.js";
import "./QList.f0865810.js";
import "./QTable.9919d54d.js";
import "./QMarkupTable.05a3914f.js";
import "./QSelect.1a7c95e6.js";
import "./QItemLabel.2d915843.js";
import "./QMenu.660a7360.js";
import "./selection.f5514ae2.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.02572258.js";
import "./use-fullscreen.8220daa4.js";
import "./axios.39cef10c.js";
import "./debug.b9d7424b.js";
import "./help.787b8a04.js";
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
