import { _ as _sfc_main$1 } from "./AuditTimeline.8d3bb618.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.f0bcd142.js";
import "./QTd.d67efcc3.js";
import "./selection.07b4b8ad.js";
import "./QList.cff4e2be.js";
import "./QTable.4f4476ce.js";
import "./QMarkupTable.55d38bf8.js";
import "./QSelect.d87a43fc.js";
import "./QItemLabel.2a9c8bab.js";
import "./QMenu.7752fb6c.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.7104b56a.js";
import "./use-fullscreen.39c9d854.js";
import "./axios.c33bd943.js";
import "./debug.b9d7424b.js";
import "./help.31050a33.js";
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
