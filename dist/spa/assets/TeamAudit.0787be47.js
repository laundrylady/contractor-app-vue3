import { _ as _sfc_main$1 } from "./AuditTimeline.ed01fc5e.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.c351ea70.js";
import "./QTd.e66c2b2b.js";
import "./QItemSection.94fe0bb6.js";
import "./QList.4fa31eab.js";
import "./QTable.453fec61.js";
import "./QMarkupTable.bae50ccc.js";
import "./QSelect.18624813.js";
import "./QItemLabel.771d44ff.js";
import "./QMenu.d46ce637.js";
import "./selection.026932bf.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.7f9c9afa.js";
import "./use-fullscreen.9a0455d6.js";
import "./axios.631f0c20.js";
import "./debug.b9d7424b.js";
import "./help.828f3f7d.js";
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
