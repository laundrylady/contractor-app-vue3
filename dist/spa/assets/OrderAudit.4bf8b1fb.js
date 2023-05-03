import { _ as _sfc_main$1 } from "./AuditTimeline.1e14065f.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.f596c8b4.js";
import "./QTable.d7bb4f34.js";
import "./QList.0be7fff6.js";
import "./QMarkupTable.d01b3e45.js";
import "./QSelect.062469f2.js";
import "./QItemSection.428ce3b8.js";
import "./rtl.a33aca76.js";
import "./format.ce8c2b83.js";
import "./QLinearProgress.bbb2424d.js";
import "./use-fullscreen.ea6ac12a.js";
import "./axios.165a10e8.js";
import "./debug.805a8aef.js";
import "./help.f405f514.js";
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
