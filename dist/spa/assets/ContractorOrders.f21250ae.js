import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a2dbc8fc.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.1b959b05.js";
import "./QBreadcrumbs.e5151e5c.js";
import "./QSelect.31cc5689.js";
import "./selection.2b1a1f43.js";
import "./QItemLabel.ea3a7bf6.js";
import "./QMenu.8b9cd80b.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.d7e1c25d.js";
import "./QList.1496baac.js";
import "./QMarkupTable.77f68cc5.js";
import "./QLinearProgress.e0e216e9.js";
import "./use-fullscreen.cf1d82ea.js";
import "./axios.2a5c0600.js";
import "./DateField.f43f91dc.js";
import "./QDate.87d50598.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.9c20dad7.js";
import "./QPopupProxy.4a267102.js";
import "./use-quasar.4ba19de0.js";
import "./OrderListFormat.5cfb454d.js";
import "./QSpace.6405a9be.js";
import "./QBadge.71624378.js";
import "./open-url.db79120d.js";
import "./debug.b9d7424b.js";
import "./help.e23e635c.js";
import "./geolocation.7ed8e54f.js";
import "./StatusTag.5b332e8f.js";
import "./UserAvatar.00c5e75f.js";
import "./use-ratio.42210581.js";
import "./security.43f1eb3b.js";
import "./vue-i18n.runtime.esm-bundler.4753797d.js";
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
