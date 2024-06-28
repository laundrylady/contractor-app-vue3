import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.6e727cd4.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.bffa8c3c.js";
import "./QBreadcrumbs.7ca2a6fe.js";
import "./QSelect.bbd3cae6.js";
import "./selection.30294983.js";
import "./QItemLabel.afd2234f.js";
import "./QMenu.0f25bc7d.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.4234d9b0.js";
import "./QList.9280b7fb.js";
import "./QMarkupTable.5b2cb7a8.js";
import "./QLinearProgress.cc2c4a27.js";
import "./use-fullscreen.7191c0c0.js";
import "./axios.f27ccc14.js";
import "./DateField.0096c7ca.js";
import "./QDate.308277c6.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.58627e28.js";
import "./QPopupProxy.19a3eb35.js";
import "./use-quasar.6c806c42.js";
import "./OrderListFormat.648c733a.js";
import "./QSpace.6279c2e1.js";
import "./QBadge.0c13b2e9.js";
import "./open-url.3d21148c.js";
import "./debug.b9d7424b.js";
import "./help.237e61c3.js";
import "./geolocation.25e2140e.js";
import "./StatusTag.43e2ea9f.js";
import "./UserAvatar.e41af71c.js";
import "./use-ratio.9f862873.js";
import "./security.cbdf9a0b.js";
import "./vue-i18n.runtime.esm-bundler.f3d928b3.js";
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
