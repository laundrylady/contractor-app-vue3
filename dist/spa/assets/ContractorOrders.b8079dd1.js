import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.17ca04df.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e01fb56c.js";
import "./QBreadcrumbs.d489b520.js";
import "./QSelect.3c1f85f2.js";
import "./QItemSection.a4f40f83.js";
import "./QItemLabel.1b847659.js";
import "./QMenu.637c5eb6.js";
import "./selection.22383e78.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.0ae4cdb5.js";
import "./QList.b2321818.js";
import "./QMarkupTable.033cd31a.js";
import "./QLinearProgress.42a48068.js";
import "./use-fullscreen.e1398b30.js";
import "./axios.12a8e334.js";
import "./DateField.a6e9426a.js";
import "./QDate.8abedbb8.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.7dcb38ca.js";
import "./QPopupProxy.bde109cb.js";
import "./use-quasar.cb1bab98.js";
import "./OrderListFormat.66a51579.js";
import "./QSpace.812548e5.js";
import "./QBadge.420c13e4.js";
import "./open-url.a1a1ada7.js";
import "./debug.b9d7424b.js";
import "./help.0c3f1d03.js";
import "./geolocation.ab74469e.js";
import "./StatusTag.9f37b6fc.js";
import "./UserAvatar.b496c5e2.js";
import "./use-ratio.9b7df102.js";
import "./security.bc435b25.js";
import "./vue-i18n.runtime.esm-bundler.9e0d00b7.js";
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
