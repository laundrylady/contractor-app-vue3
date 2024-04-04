import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.39ec9ee7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.1962d2ae.js";
import "./QBreadcrumbs.b35497a2.js";
import "./QSelect.588e498c.js";
import "./QItemSection.27e965ab.js";
import "./QItemLabel.6b198e0f.js";
import "./QMenu.f8889ea8.js";
import "./selection.48aa2add.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.ef535a03.js";
import "./QList.468eae41.js";
import "./QMarkupTable.ea415df9.js";
import "./QLinearProgress.7695f0df.js";
import "./use-fullscreen.700ae56b.js";
import "./axios.7f94127f.js";
import "./DateField.be0015db.js";
import "./QDate.6b01192e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.13c28df3.js";
import "./QPopupProxy.d634c9a4.js";
import "./use-quasar.fd553804.js";
import "./OrderListFormat.a68d5101.js";
import "./QSpace.f6338f01.js";
import "./QBadge.8da8b603.js";
import "./open-url.86942a46.js";
import "./debug.b9d7424b.js";
import "./help.70a262df.js";
import "./geolocation.a74dd9ef.js";
import "./StatusTag.50b578ea.js";
import "./UserAvatar.411c493f.js";
import "./use-ratio.484e4c18.js";
import "./security.53bfb4c2.js";
import "./vue-i18n.runtime.esm-bundler.7948a615.js";
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
