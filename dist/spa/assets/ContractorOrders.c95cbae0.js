import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8181a969.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.83437ab4.js";
import "./QBreadcrumbs.fd438573.js";
import "./QSelect.7737430d.js";
import "./QItemSection.293df8f2.js";
import "./QItemLabel.f4bffbe6.js";
import "./QMenu.1ce168ce.js";
import "./selection.15c4a6c9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.7c7714e2.js";
import "./QList.07aafddb.js";
import "./QMarkupTable.10d53d17.js";
import "./QLinearProgress.51f1c00b.js";
import "./use-fullscreen.f3e3a5c0.js";
import "./axios.e2b068bb.js";
import "./DateField.3ded7250.js";
import "./QDate.1e686bca.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.6b0ae3e1.js";
import "./QPopupProxy.6c63ea0b.js";
import "./use-quasar.1c5c2b7c.js";
import "./OrderListFormat.d0bf812c.js";
import "./QSpace.ba583cbe.js";
import "./QBadge.1184966b.js";
import "./open-url.96b8a4aa.js";
import "./debug.b9d7424b.js";
import "./help.2e094d94.js";
import "./geolocation.266d2d78.js";
import "./StatusTag.be067a35.js";
import "./UserAvatar.6ee5bc04.js";
import "./use-ratio.a13aa825.js";
import "./security.29471f60.js";
import "./vue-i18n.runtime.esm-bundler.66bbbdbc.js";
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
