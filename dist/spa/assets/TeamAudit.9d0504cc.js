import { _ as _sfc_main$1 } from "./AuditTimeline.e3aa5d78.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.68787ef2.js";
import "./QTd.2091a7ad.js";
import "./QItemSection.830c8906.js";
import "./QList.92c4c2c2.js";
import "./QTable.a130360d.js";
import "./QMarkupTable.8dfac713.js";
import "./QSelect.985750bb.js";
import "./QItemLabel.0416fad3.js";
import "./QMenu.30a416b8.js";
import "./selection.a7aa919b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f44f9a54.js";
import "./use-fullscreen.dd11c2f3.js";
import "./axios.43fd41e6.js";
import "./debug.b9d7424b.js";
import "./help.9f23d43e.js";
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
