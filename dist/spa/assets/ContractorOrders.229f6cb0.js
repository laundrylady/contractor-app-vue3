import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.ef5fd4f4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.224e20e0.js";
import "./QBreadcrumbs.44018989.js";
import "./QSelect.ee2d0560.js";
import "./QItemSection.0dd1e131.js";
import "./QItemLabel.a0618c3e.js";
import "./QMenu.f2bed1ae.js";
import "./selection.865df55e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.e6b30b30.js";
import "./QList.358d155c.js";
import "./QMarkupTable.f1642325.js";
import "./QLinearProgress.468b0647.js";
import "./use-fullscreen.851cb0a8.js";
import "./axios.3cd41a70.js";
import "./DateField.94b5cd32.js";
import "./QDate.5deefd37.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.fb9e7ffc.js";
import "./QPopupProxy.e13e8117.js";
import "./use-quasar.8972ad33.js";
import "./OrderListFormat.a5d5b6ba.js";
import "./QSpace.26b3ba8e.js";
import "./QBadge.beeaa554.js";
import "./open-url.4a5dcbc8.js";
import "./debug.b9d7424b.js";
import "./help.b31953bc.js";
import "./geolocation.587e46e7.js";
import "./StatusTag.8e9ed719.js";
import "./UserAvatar.295ab91e.js";
import "./use-ratio.b91e5638.js";
import "./security.f71e7dcd.js";
import "./vue-i18n.runtime.esm-bundler.7267b62a.js";
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
