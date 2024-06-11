import { _ as _sfc_main$1 } from "./AuditTimeline.8c4ba211.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e9465d3e.js";
import "./QTd.c2ede27c.js";
import "./QItemSection.3f560663.js";
import "./QList.1efb6676.js";
import "./QTable.963f6fb2.js";
import "./QMarkupTable.82321d35.js";
import "./QSelect.25517cea.js";
import "./QItemLabel.a9a4c4a5.js";
import "./QMenu.7ce6e686.js";
import "./selection.a082d363.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.a84735e7.js";
import "./use-fullscreen.7f46a1d4.js";
import "./axios.d924370d.js";
import "./debug.b9d7424b.js";
import "./help.c08c7d1f.js";
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
