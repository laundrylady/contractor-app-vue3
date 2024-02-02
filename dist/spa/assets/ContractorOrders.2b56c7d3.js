import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.ab7e7a8d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.8e5fd2f9.js";
import "./QBreadcrumbs.6c77a9cb.js";
import "./QSelect.a1aca694.js";
import "./QItemSection.910187a2.js";
import "./QItemLabel.458cb545.js";
import "./QMenu.e160cbd1.js";
import "./selection.03438c15.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.5e101451.js";
import "./QList.5e2c6f45.js";
import "./QMarkupTable.c3e10aaf.js";
import "./QLinearProgress.f768b62e.js";
import "./use-fullscreen.30c8c93a.js";
import "./axios.95284358.js";
import "./DateField.203e56c1.js";
import "./QDate.48d7592c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.e795b154.js";
import "./QPopupProxy.a9bf37ac.js";
import "./use-quasar.c111ed53.js";
import "./OrderListFormat.6fb56f73.js";
import "./QSpace.9884ea55.js";
import "./QBadge.2eecd6ad.js";
import "./open-url.4fed5f1a.js";
import "./debug.b9d7424b.js";
import "./help.e3a4d611.js";
import "./geolocation.11d40b87.js";
import "./StatusTag.caecfd98.js";
import "./UserAvatar.bed070ba.js";
import "./use-ratio.7f8170de.js";
import "./security.01e319df.js";
import "./vue-i18n.runtime.esm-bundler.fda23bea.js";
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
