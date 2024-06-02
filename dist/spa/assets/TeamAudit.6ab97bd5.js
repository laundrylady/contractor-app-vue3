import { _ as _sfc_main$1 } from "./AuditTimeline.a3b099eb.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.236933ce.js";
import "./QTd.e144541a.js";
import "./QItemSection.ba323dad.js";
import "./QList.5139d086.js";
import "./QTable.ad89c0be.js";
import "./QMarkupTable.ae41a849.js";
import "./QSelect.d1f2e8b7.js";
import "./QItemLabel.c7c3cab8.js";
import "./QMenu.aea6277a.js";
import "./selection.5951edfe.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.4d16ca63.js";
import "./use-fullscreen.2ba1ce0c.js";
import "./axios.81902657.js";
import "./debug.b9d7424b.js";
import "./help.7d5b75c7.js";
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
