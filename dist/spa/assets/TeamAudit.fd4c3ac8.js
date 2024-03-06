import { _ as _sfc_main$1 } from "./AuditTimeline.1a047a5d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.1a6e03af.js";
import "./QTd.cf99ec1c.js";
import "./QItemSection.0d1d3958.js";
import "./QList.333d9fbf.js";
import "./QTable.e14e4509.js";
import "./QMarkupTable.f661872f.js";
import "./QSelect.e03e6736.js";
import "./QItemLabel.0d7bf23c.js";
import "./QMenu.49eed60d.js";
import "./selection.40ffa727.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.2055dbc8.js";
import "./use-fullscreen.03ae4c57.js";
import "./axios.68f25e65.js";
import "./debug.b9d7424b.js";
import "./help.5ba6f726.js";
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
