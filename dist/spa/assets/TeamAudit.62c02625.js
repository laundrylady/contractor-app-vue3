import { _ as _sfc_main$1 } from "./AuditTimeline.361a4104.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode } from "./index.a39d6510.js";
import "./QTd.5b0e2d38.js";
import "./selection.3a148310.js";
import "./QList.ca805a71.js";
import "./QTable.115b34bd.js";
import "./QMarkupTable.f38b3566.js";
import "./QSelect.c7ca6057.js";
import "./QItemLabel.4f07039d.js";
import "./QMenu.ab547715.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c560f653.js";
import "./use-fullscreen.6d1cf35e.js";
import "./axios.d8634373.js";
import "./debug.972d445d.js";
import "./help.9a327069.js";
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
