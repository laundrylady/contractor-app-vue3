import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.0851ecbd.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.f6cde04a.js";
import "./QTd.f0690567.js";
import "./QItemSection.05fdd866.js";
import "./QList.02b87db7.js";
import "./QMenu.795675ce.js";
import "./selection.4af54f96.js";
import "./QTable.3f33dcb3.js";
import "./QMarkupTable.3e572864.js";
import "./QSelect.d58e450e.js";
import "./QItemLabel.3e84cad0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4210e877.js";
import "./use-fullscreen.e8760ed3.js";
import "./ClosePopup.2e88bc7e.js";
import "./axios.1aa63f19.js";
import "./StatusTag.e8c20958.js";
import "./QBadge.a9102c20.js";
import "./debug.972d445d.js";
import "./help.21bcf6c2.js";
import "./vue-i18n.runtime.esm-bundler.9d892b7d.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Booking History", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Below is the complete booking history.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamOrders",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        _hoisted_3,
        createVNode(_sfc_main$1, {
          team_id: __props.model.id
        }, null, 8, ["team_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
