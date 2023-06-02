import { _ as _sfc_main$1 } from "./AuditTimeline.7156cf67.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode } from "./index.e94f5960.js";
import "./QTable.522ca16a.js";
import "./QList.3e9c77b4.js";
import "./QSelect.11126e51.js";
import "./QItemSection.d938c332.js";
import "./format.6405c3bf.js";
import "./QLinearProgress.c9ec1663.js";
import "./use-fullscreen.6b63f37b.js";
import "./axios.300ce40b.js";
import "./debug.805a8aef.js";
import "./help.759ffad4.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorAudit",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          auditable_id: __props.model.id,
          auditable_type: "User"
        }, null, 8, ["auditable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
