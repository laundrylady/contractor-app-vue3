import { _ as _sfc_main$1 } from "./AuditTimeline.86e9abf1.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode } from "./index.15e87dfc.js";
import "./QTable.759037cf.js";
import "./QList.f8adc042.js";
import "./QMarkupTable.b26d5921.js";
import "./QSelect.4af781f0.js";
import "./QItemSection.a02f1455.js";
import "./rtl.4502dde4.js";
import "./format.5b671469.js";
import "./QLinearProgress.f94d5831.js";
import "./use-fullscreen.78aba050.js";
import "./axios.c48e86d7.js";
import "./debug.805a8aef.js";
import "./help.16f9d5c4.js";
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
