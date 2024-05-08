import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.5903ca9c.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.720b4a5c.js";
import "./QBreadcrumbs.c05001d9.js";
import "./QSelect.222fe7ca.js";
import "./QItemSection.4511fc78.js";
import "./QItemLabel.e41b433a.js";
import "./QMenu.84897510.js";
import "./selection.7e914794.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.ecb4d971.js";
import "./QList.a7144db4.js";
import "./QMarkupTable.37755f2a.js";
import "./QLinearProgress.60c05025.js";
import "./use-fullscreen.97ad1f45.js";
import "./axios.6b82ea5b.js";
import "./DateField.ed032c55.js";
import "./QDate.e8551beb.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.706577ec.js";
import "./QPopupProxy.d58a65c0.js";
import "./use-quasar.06182be2.js";
import "./OrderListFormat.a1bbedb8.js";
import "./QSpace.a972aa14.js";
import "./QBadge.6522b7b3.js";
import "./open-url.0960afba.js";
import "./debug.b9d7424b.js";
import "./help.4fff6941.js";
import "./geolocation.59993e57.js";
import "./StatusTag.e9e86155.js";
import "./UserAvatar.0217f637.js";
import "./use-ratio.aeade1e9.js";
import "./security.f167b7dc.js";
import "./vue-i18n.runtime.esm-bundler.a0c98e59.js";
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
