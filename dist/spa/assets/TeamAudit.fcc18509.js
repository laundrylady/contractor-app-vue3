import { _ as _sfc_main$1 } from "./AuditTimeline.655bf173.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.afc091ab.js";
import "./QTd.29f61f26.js";
import "./QItemSection.ea085799.js";
import "./QList.7a1c341d.js";
import "./QTable.ffc47d43.js";
import "./QMarkupTable.668b7e3d.js";
import "./QSelect.1e75ac0e.js";
import "./QItemLabel.ba006d03.js";
import "./QMenu.a4d62648.js";
import "./selection.5498db29.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.876f79ae.js";
import "./use-fullscreen.c73ad479.js";
import "./axios.14a6eea7.js";
import "./debug.b9d7424b.js";
import "./help.17be1bb5.js";
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
