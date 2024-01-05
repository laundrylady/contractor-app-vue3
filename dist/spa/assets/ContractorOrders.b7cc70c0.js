import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.72ef04f8.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f2f120a5.js";
import "./QBreadcrumbs.28f4c394.js";
import "./QSelect.63a09874.js";
import "./format.f6872143.js";
import "./QItemLabel.3aef1a02.js";
import "./selection.ee8e1f36.js";
import "./rtl.b51694b1.js";
import "./QTable.8b86aa74.js";
import "./QList.6336f6ec.js";
import "./QMarkupTable.49685c81.js";
import "./QLinearProgress.69b713bd.js";
import "./use-fullscreen.5affefb7.js";
import "./axios.30336af0.js";
import "./DateField.e528e2c5.js";
import "./QDate.876ca943.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.e2b124bc.js";
import "./QPopupProxy.233757f6.js";
import "./use-quasar.078bd751.js";
import "./OrderListFormat.90025a56.js";
import "./QToolbarTitle.1d564cf9.js";
import "./QSpace.899455e8.js";
import "./QToolbar.d035499f.js";
import "./QBadge.7706a2f3.js";
import "./index.esm.20ba7d4e.js";
import "./debug.b9d7424b.js";
import "./help.78750dfe.js";
import "./security.193eeee9.js";
import "./helpers.d6d338d7.js";
import "./vue-i18n.runtime.esm-bundler.07627fd8.js";
import "./OrderContractorManagement.df2a3f13.js";
import "./UserAvatar.f3559d86.js";
import "./QImg.5bd18398.js";
import "./use-ratio.f3c96b95.js";
import "./open-url.222db89d.js";
import "./geolocation.0e8ba94d.js";
import "./StatusTag.d2769380.js";
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
