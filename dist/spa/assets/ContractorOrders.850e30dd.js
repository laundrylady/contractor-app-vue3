import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.2949533a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.9b8b7269.js";
import "./QBreadcrumbs.a6a2ab4e.js";
import "./QSelect.2e86e4ba.js";
import "./QItemSection.53b57c9f.js";
import "./QItemLabel.544f2a72.js";
import "./QMenu.7793a0ce.js";
import "./selection.4a77bd85.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.4c46723a.js";
import "./QList.bf44c184.js";
import "./QMarkupTable.406897fe.js";
import "./QLinearProgress.673aedc8.js";
import "./use-fullscreen.e3125336.js";
import "./axios.c3179b68.js";
import "./DateField.704433aa.js";
import "./QDate.30612dbe.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.29e55a34.js";
import "./QPopupProxy.0c3f3894.js";
import "./use-quasar.90865cf2.js";
import "./OrderListFormat.1d9e63a5.js";
import "./QSpace.fd46843b.js";
import "./QBadge.ce2cba51.js";
import "./open-url.23e5442a.js";
import "./debug.b9d7424b.js";
import "./help.d206c0e0.js";
import "./geolocation.3ae60a67.js";
import "./StatusTag.2e6f8444.js";
import "./UserAvatar.d8d62d36.js";
import "./use-ratio.15bb8803.js";
import "./security.9f5ae20d.js";
import "./vue-i18n.runtime.esm-bundler.e0944ed1.js";
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
