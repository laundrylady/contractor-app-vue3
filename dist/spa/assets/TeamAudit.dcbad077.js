import { _ as _sfc_main$1 } from "./AuditTimeline.963dd4c7.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.63580deb.js";
import "./QTd.d1dd3e51.js";
import "./QItemSection.9958946a.js";
import "./QList.2c3b49c0.js";
import "./QTable.b698277f.js";
import "./QMarkupTable.f7139260.js";
import "./QSelect.9037adf0.js";
import "./QItemLabel.7691b773.js";
import "./QMenu.6dea5d13.js";
import "./selection.0917889d.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.61f12a2f.js";
import "./use-fullscreen.feaaba10.js";
import "./axios.92e3014b.js";
import "./debug.b9d7424b.js";
import "./help.0c132d5f.js";
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
