import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8163457b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.102a095b.js";
import "./QBreadcrumbs.8aaaa11c.js";
import "./QSelect.57e48f88.js";
import "./QItemSection.a5e05406.js";
import "./QItemLabel.649a3c36.js";
import "./QMenu.082303fa.js";
import "./selection.6f530ad9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.ed2bfb69.js";
import "./QList.39a3f84d.js";
import "./QMarkupTable.20c5f4d2.js";
import "./QLinearProgress.96016cd2.js";
import "./use-fullscreen.0d3fdc5d.js";
import "./axios.5e65f383.js";
import "./DateField.7c03df61.js";
import "./QDate.337dcf37.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.a04017f0.js";
import "./QPopupProxy.c41857b8.js";
import "./use-quasar.3a3c7003.js";
import "./OrderListFormat.80641774.js";
import "./QSpace.ccf1e513.js";
import "./QBadge.67f1f13b.js";
import "./open-url.2c69081d.js";
import "./debug.b9d7424b.js";
import "./help.312020b7.js";
import "./geolocation.542150f8.js";
import "./StatusTag.304f6b57.js";
import "./UserAvatar.d095100e.js";
import "./use-ratio.9e4b21cc.js";
import "./security.15ac774d.js";
import "./vue-i18n.runtime.esm-bundler.9166c43d.js";
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
