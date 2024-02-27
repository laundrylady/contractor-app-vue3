import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.b3ad8c19.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.08099017.js";
import "./QBreadcrumbs.ad9f902a.js";
import "./QSelect.f2190d08.js";
import "./QItemSection.e2b74d1f.js";
import "./QItemLabel.c4904d43.js";
import "./QMenu.50fe9482.js";
import "./selection.6ee25a46.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.dce95a50.js";
import "./QList.456d7f85.js";
import "./QMarkupTable.cb22d8a3.js";
import "./QLinearProgress.1d1a1d81.js";
import "./use-fullscreen.0b914ca5.js";
import "./axios.61d5b832.js";
import "./DateField.5283f41c.js";
import "./QDate.148fa726.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.04c7223f.js";
import "./QPopupProxy.57b8824c.js";
import "./use-quasar.f5c24810.js";
import "./OrderListFormat.10829f67.js";
import "./QSpace.ae68c70d.js";
import "./QBadge.b755dc86.js";
import "./open-url.b57c8456.js";
import "./debug.b9d7424b.js";
import "./help.c48cb5cb.js";
import "./geolocation.c5e5f4ee.js";
import "./StatusTag.c63dd151.js";
import "./UserAvatar.bef42f79.js";
import "./use-ratio.3ba82cfd.js";
import "./security.b8c9e558.js";
import "./vue-i18n.runtime.esm-bundler.a8791c93.js";
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
