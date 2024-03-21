import { _ as _sfc_main$1 } from "./AuditTimeline.c8e61db2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f3419799.js";
import "./QTd.c7070b03.js";
import "./QItemSection.5c151b04.js";
import "./QList.40b85627.js";
import "./QTable.b39b04b4.js";
import "./QMarkupTable.7f107c91.js";
import "./QSelect.947b013a.js";
import "./QItemLabel.3cbcac8d.js";
import "./QMenu.9700f640.js";
import "./selection.43f6f34b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.e7c5e662.js";
import "./use-fullscreen.8b9ac97a.js";
import "./axios.6ba4cb3c.js";
import "./debug.b9d7424b.js";
import "./help.b5f10652.js";
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
