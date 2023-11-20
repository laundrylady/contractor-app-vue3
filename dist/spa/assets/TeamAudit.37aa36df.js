import { _ as _sfc_main$1 } from "./AuditTimeline.5ea1850c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.e689b3a4.js";
import "./QTd.1fcacd53.js";
import "./QItemSection.66a439b4.js";
import "./QList.67f13691.js";
import "./QTable.ed8f700a.js";
import "./QMarkupTable.014a3cb4.js";
import "./QSelect.feaeb567.js";
import "./QItemLabel.bab8af8b.js";
import "./QMenu.f2d7af9d.js";
import "./selection.8bb6db55.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f4c68dee.js";
import "./use-fullscreen.4c691057.js";
import "./axios.0186e3dc.js";
import "./debug.972d445d.js";
import "./help.3662df67.js";
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
