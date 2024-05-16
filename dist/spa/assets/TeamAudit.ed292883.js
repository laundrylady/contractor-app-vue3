import { _ as _sfc_main$1 } from "./AuditTimeline.e3ecd7ab.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e66b6337.js";
import "./QTd.d7630fad.js";
import "./QItemSection.834a99e7.js";
import "./QList.a1a1fcc3.js";
import "./QTable.16458532.js";
import "./QMarkupTable.f494b476.js";
import "./QSelect.dbf7a13c.js";
import "./QItemLabel.f058a8a6.js";
import "./QMenu.b5d9bdae.js";
import "./selection.6fc9af93.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.75a1ae8b.js";
import "./use-fullscreen.eae62ac4.js";
import "./axios.99b150d2.js";
import "./debug.b9d7424b.js";
import "./help.4ea95189.js";
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
