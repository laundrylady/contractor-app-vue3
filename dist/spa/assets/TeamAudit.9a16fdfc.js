import { _ as _sfc_main$1 } from "./AuditTimeline.92cdce7f.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.bd785861.js";
import "./QTd.a2833ca1.js";
import "./QItemSection.f1b59f98.js";
import "./QList.43d4587d.js";
import "./QTable.9f162f30.js";
import "./QMarkupTable.476a908b.js";
import "./QSelect.be4955f8.js";
import "./QItemLabel.5834a586.js";
import "./QMenu.8d439091.js";
import "./selection.f4440aa2.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.5fa37f8a.js";
import "./use-fullscreen.5f871a48.js";
import "./axios.01a73637.js";
import "./debug.b9d7424b.js";
import "./help.2421d6af.js";
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
