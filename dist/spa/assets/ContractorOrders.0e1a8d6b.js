import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.b81e9d0c.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.b320c8ca.js";
import "./QTable.d4f43e78.js";
import "./QList.b5b9109a.js";
import "./QMarkupTable.90f28d12.js";
import "./QSelect.a53b0a68.js";
import "./QItemSection.370f32fe.js";
import "./rtl.20f006a8.js";
import "./format.8239da63.js";
import "./QLinearProgress.b986023f.js";
import "./use-fullscreen.414bafcc.js";
import "./ClosePopup.97d3c14c.js";
import "./axios.fb60ded3.js";
import "./StatusTag.f6922636.js";
import "./QBadge.7a2f6d69.js";
import "./debug.805a8aef.js";
import "./help.1102714b.js";
import "./vue-i18n.runtime.esm-bundler.b650d2c7.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Booking History", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ContractorOrders",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, "Below is the complete booking history for this " + toDisplayString(_ctx.$t("contractor.name").toLowerCase()) + ".", 1),
        createVNode(_sfc_main$1, {
          contractor_user_id: __props.model.id
        }, null, 8, ["contractor_user_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
