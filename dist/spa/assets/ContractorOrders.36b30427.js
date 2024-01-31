import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.cdb35317.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.cfc8c6ea.js";
import "./QBreadcrumbs.65dc6d56.js";
import "./QSelect.2d6665f9.js";
import "./QItemSection.380c7e57.js";
import "./QItemLabel.d074345c.js";
import "./QMenu.9e107354.js";
import "./selection.fe20666e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.b58c2d64.js";
import "./QList.b4201a4d.js";
import "./QMarkupTable.ecabbd53.js";
import "./QLinearProgress.cb0415af.js";
import "./use-fullscreen.dea557d3.js";
import "./axios.d4c1dfac.js";
import "./DateField.a1a96a5c.js";
import "./QDate.f2bcf4bb.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.f626cb42.js";
import "./QPopupProxy.1c222f5f.js";
import "./use-quasar.7e6078b2.js";
import "./OrderListFormat.f0c61030.js";
import "./QSpace.d7fd511e.js";
import "./QBadge.41982e3e.js";
import "./open-url.3fc67fb5.js";
import "./debug.b9d7424b.js";
import "./help.3fb17df8.js";
import "./geolocation.8f58b7ff.js";
import "./StatusTag.b381afc0.js";
import "./UserAvatar.8c28640e.js";
import "./use-ratio.da3c8311.js";
import "./security.3063f604.js";
import "./vue-i18n.runtime.esm-bundler.4f9b12d3.js";
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
