import { _ as _sfc_main$1 } from "./AuditTimeline.5fa0fa87.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.30054b44.js";
import "./QTd.ccd7f461.js";
import "./QItemSection.5237c7b8.js";
import "./QList.4049eab8.js";
import "./QTable.afe5ad12.js";
import "./QMarkupTable.00f056b1.js";
import "./QSelect.4e8099fb.js";
import "./QItemLabel.38612fc2.js";
import "./QMenu.61881f59.js";
import "./selection.1bd59589.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QLinearProgress.5bbc301d.js";
import "./use-fullscreen.89c2ba9f.js";
import "./axios.0c10ef76.js";
import "./debug.b9d7424b.js";
import "./help.9760c9de.js";
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
