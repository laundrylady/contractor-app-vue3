import { _ as _sfc_main$1 } from "./AuditTimeline.2fd5aaac.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.e7424e86.js";
import "./QTable.f1354ab1.js";
import "./QList.4caebc00.js";
import "./QMarkupTable.40cb7b94.js";
import "./QSelect.fc8325f9.js";
import "./QItemSection.56dfbcc4.js";
import "./rtl.c1ddf9d1.js";
import "./format.711dd4cb.js";
import "./QLinearProgress.73bc0d9e.js";
import "./axios.e112af7f.js";
import "./debug.805a8aef.js";
import "./help.f4bb6a30.js";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderAudit",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          auditable_id: __props.model.id,
          auditable_type: "Order"
        }, null, 8, ["auditable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
