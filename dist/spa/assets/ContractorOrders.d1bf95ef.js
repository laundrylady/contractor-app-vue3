import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.76d4d867.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ae9373f8.js";
import "./QBreadcrumbs.1d3c3e0a.js";
import "./QSelect.c1681cd1.js";
import "./QItemSection.ec329744.js";
import "./QItemLabel.aa53f096.js";
import "./QMenu.79aff003.js";
import "./selection.33a56d83.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.fa28e3fb.js";
import "./QList.ec9fcd66.js";
import "./QMarkupTable.b851d32f.js";
import "./QLinearProgress.9ccf62d3.js";
import "./use-fullscreen.06347866.js";
import "./axios.177cad41.js";
import "./DateField.7dd45315.js";
import "./QDate.4ee6cfbc.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.33af78e1.js";
import "./QPopupProxy.1e6ad5a8.js";
import "./use-quasar.6e4ce33e.js";
import "./OrderListFormat.36981d7a.js";
import "./QSpace.dbda70ac.js";
import "./QBadge.71c4c220.js";
import "./open-url.8ee761b6.js";
import "./debug.b9d7424b.js";
import "./help.f50b0519.js";
import "./geolocation.38ce0ab9.js";
import "./StatusTag.83cc3093.js";
import "./UserAvatar.a0c358ca.js";
import "./use-ratio.c042e78f.js";
import "./security.2e325ad1.js";
import "./vue-i18n.runtime.esm-bundler.1bb65a5b.js";
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
