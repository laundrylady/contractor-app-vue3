import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.d8c18cc6.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.796300b2.js";
import "./QBreadcrumbs.2eb6ac7d.js";
import "./QSelect.437ea744.js";
import "./QItemSection.37b2f889.js";
import "./QItemLabel.f1084971.js";
import "./QMenu.18c21b53.js";
import "./selection.7aaacd8a.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.4d792419.js";
import "./QList.ca6991bd.js";
import "./QMarkupTable.6d282bed.js";
import "./QLinearProgress.a4c8fc3b.js";
import "./use-fullscreen.6086a2d9.js";
import "./axios.e0dd89c3.js";
import "./DateField.6b82815c.js";
import "./QDate.58d70816.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.eeeaff2d.js";
import "./QPopupProxy.9ebaaf87.js";
import "./use-quasar.66fd6a4a.js";
import "./OrderListFormat.504d5eae.js";
import "./QSpace.99cba1e8.js";
import "./QBadge.f5e71b95.js";
import "./open-url.d67b16a6.js";
import "./debug.b9d7424b.js";
import "./help.396f7ad9.js";
import "./geolocation.429f8b06.js";
import "./StatusTag.38962d2f.js";
import "./UserAvatar.444047f3.js";
import "./use-ratio.b533698e.js";
import "./security.a9f923e8.js";
import "./vue-i18n.runtime.esm-bundler.50fd38af.js";
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
