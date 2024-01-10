import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.29bfb524.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.5de92a2b.js";
import "./QBreadcrumbs.416215f8.js";
import "./QSelect.3038c863.js";
import "./QItemSection.805a26d0.js";
import "./QItemLabel.bd2fac45.js";
import "./QMenu.7a184e26.js";
import "./selection.a6faf749.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.7c47a1d3.js";
import "./QList.79a00ed0.js";
import "./QMarkupTable.2d69a80e.js";
import "./QLinearProgress.9750c8e7.js";
import "./use-fullscreen.37f6214f.js";
import "./axios.af1016c8.js";
import "./DateField.808cc56e.js";
import "./QDate.980540f1.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.1330106e.js";
import "./QPopupProxy.eefe00da.js";
import "./use-quasar.1285a0f9.js";
import "./OrderListFormat.44c14b0d.js";
import "./QSpace.0156b387.js";
import "./QBadge.26f158cd.js";
import "./open-url.d8b83b47.js";
import "./debug.b9d7424b.js";
import "./help.97306336.js";
import "./geolocation.fd7d1673.js";
import "./StatusTag.7a7fb887.js";
import "./UserAvatar.fa6ec989.js";
import "./use-ratio.e90a0df9.js";
import "./security.f286949f.js";
import "./vue-i18n.runtime.esm-bundler.65cb5c45.js";
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
