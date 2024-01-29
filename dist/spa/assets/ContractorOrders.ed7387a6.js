import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.3bf040ee.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.42bdc4c5.js";
import "./QBreadcrumbs.aa2b4bfb.js";
import "./QSelect.1dcbaa44.js";
import "./QItemSection.502da376.js";
import "./QItemLabel.ee412878.js";
import "./QMenu.ef580008.js";
import "./selection.f1aee430.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.45818293.js";
import "./QList.6dee3287.js";
import "./QMarkupTable.065dac23.js";
import "./QLinearProgress.c9d3c9aa.js";
import "./use-fullscreen.bc9c04b3.js";
import "./axios.fa438b1c.js";
import "./DateField.99d82e8a.js";
import "./QDate.b4a85914.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.6d399c1f.js";
import "./QPopupProxy.e08212f3.js";
import "./use-quasar.5dfdd90d.js";
import "./OrderListFormat.63befb26.js";
import "./QSpace.fb010212.js";
import "./QBadge.e2678f2d.js";
import "./open-url.18b22aa0.js";
import "./debug.b9d7424b.js";
import "./help.a99f9321.js";
import "./geolocation.e452846c.js";
import "./StatusTag.f2172c61.js";
import "./UserAvatar.2d8d5885.js";
import "./use-ratio.f1777503.js";
import "./security.b1f6d749.js";
import "./vue-i18n.runtime.esm-bundler.468885c9.js";
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
