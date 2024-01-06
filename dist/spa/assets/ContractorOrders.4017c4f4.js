import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a5eeaf69.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.4a7ccaf8.js";
import "./QBreadcrumbs.a37f31ed.js";
import "./QSelect.2cfdb3f1.js";
import "./QItemSection.5f64db8e.js";
import "./QItemLabel.d059fb8c.js";
import "./QMenu.029e863a.js";
import "./selection.f84380d5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.6c588cf1.js";
import "./QList.3acdb976.js";
import "./QMarkupTable.3190632b.js";
import "./QLinearProgress.3cd818af.js";
import "./use-fullscreen.5e475baf.js";
import "./axios.f96e4130.js";
import "./DateField.d54a537a.js";
import "./QDate.bc427825.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.4281656e.js";
import "./QPopupProxy.d9a1dfaf.js";
import "./use-quasar.39c4e8ba.js";
import "./OrderListFormat.59289736.js";
import "./QSpace.eb113057.js";
import "./QBadge.f84606b0.js";
import "./open-url.89d35b14.js";
import "./debug.b9d7424b.js";
import "./help.a72f6e72.js";
import "./geolocation.bc53fe6c.js";
import "./StatusTag.4f9d1be5.js";
import "./UserAvatar.dee49d79.js";
import "./use-ratio.46c450f4.js";
import "./security.97e7029f.js";
import "./vue-i18n.runtime.esm-bundler.0b6b3498.js";
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
