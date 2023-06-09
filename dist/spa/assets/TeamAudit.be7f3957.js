import { _ as _sfc_main$1 } from "./AuditTimeline.de070ce1.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.df648268.js";
import "./QTable.91edf465.js";
import "./QList.5de97230.js";
import "./QSelect.261f3678.js";
import "./QItemSection.69a1ed09.js";
import "./format.36ec1428.js";
import "./QLinearProgress.f6412a61.js";
import "./use-fullscreen.497e193b.js";
import "./axios.954307d5.js";
import "./debug.805a8aef.js";
import "./help.0d5056b8.js";
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
