import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.eefe16aa.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d881d216.js";
import "./QBreadcrumbs.c99f45d0.js";
import "./QSelect.e82ba68e.js";
import "./QItemSection.b380d0c4.js";
import "./QItemLabel.050cf4b9.js";
import "./QMenu.79272061.js";
import "./selection.e7968301.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.935542e8.js";
import "./QList.0e1cfd0b.js";
import "./QMarkupTable.ca3d301a.js";
import "./QLinearProgress.75fa506f.js";
import "./use-fullscreen.8f18f9f8.js";
import "./axios.d5f35dd5.js";
import "./DateField.8a6059df.js";
import "./QDate.907e993d.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.fcfa3697.js";
import "./QPopupProxy.5567f5ea.js";
import "./use-quasar.c929c652.js";
import "./OrderListFormat.db33097f.js";
import "./QSpace.846c4acf.js";
import "./QBadge.5d0408a3.js";
import "./open-url.c9411457.js";
import "./debug.b9d7424b.js";
import "./help.601a2494.js";
import "./geolocation.5bec8ebf.js";
import "./StatusTag.3c30a3da.js";
import "./UserAvatar.774ce353.js";
import "./use-ratio.59088ed6.js";
import "./security.49064f69.js";
import "./vue-i18n.runtime.esm-bundler.84382566.js";
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
