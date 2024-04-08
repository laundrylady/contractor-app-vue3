import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.20f9e9c1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f4eab609.js";
import "./QBreadcrumbs.70bff7e6.js";
import "./QSelect.86621c8e.js";
import "./QItemSection.69989551.js";
import "./QItemLabel.9f5eb23d.js";
import "./QMenu.78f77972.js";
import "./selection.8f446b8f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.0a3e678b.js";
import "./QList.4ac1db95.js";
import "./QMarkupTable.a5c2d271.js";
import "./QLinearProgress.a0b6fc32.js";
import "./use-fullscreen.c84f70be.js";
import "./axios.0f3969fa.js";
import "./DateField.b9c641aa.js";
import "./QDate.b843374f.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.25bee0fa.js";
import "./QPopupProxy.9846aaaa.js";
import "./use-quasar.fb9bb1d2.js";
import "./OrderListFormat.ca2b1167.js";
import "./QSpace.999bc7ed.js";
import "./QBadge.499a0b31.js";
import "./open-url.016f6683.js";
import "./debug.b9d7424b.js";
import "./help.2a2c0624.js";
import "./geolocation.4fbcdf7d.js";
import "./StatusTag.22b1ee04.js";
import "./UserAvatar.5a384b9f.js";
import "./use-ratio.8fa3284b.js";
import "./security.0f8ad730.js";
import "./vue-i18n.runtime.esm-bundler.49397fa6.js";
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
