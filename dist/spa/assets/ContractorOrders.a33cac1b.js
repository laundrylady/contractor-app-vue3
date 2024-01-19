import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8361dce3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2a8b6235.js";
import "./QBreadcrumbs.6dbefbb7.js";
import "./QSelect.9a541b30.js";
import "./QItemSection.0eb83c6b.js";
import "./QItemLabel.8647561e.js";
import "./QMenu.daeaa8fa.js";
import "./selection.c8b2b5d8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.cf1adce4.js";
import "./QList.90ff5062.js";
import "./QMarkupTable.6f330643.js";
import "./QLinearProgress.fbdc694d.js";
import "./use-fullscreen.8562bd47.js";
import "./axios.2ca873cc.js";
import "./DateField.846ef942.js";
import "./QDate.934e95ad.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.428f7b86.js";
import "./QPopupProxy.aaf5a5e2.js";
import "./use-quasar.295b06c3.js";
import "./OrderListFormat.9f0662e5.js";
import "./QSpace.6d5c9a33.js";
import "./QBadge.5e61caed.js";
import "./open-url.db472b7f.js";
import "./debug.b9d7424b.js";
import "./help.f1df2904.js";
import "./geolocation.39187e3f.js";
import "./StatusTag.6193a3a7.js";
import "./UserAvatar.59bd3699.js";
import "./use-ratio.1bfc377b.js";
import "./security.8bb1324e.js";
import "./vue-i18n.runtime.esm-bundler.3dac5889.js";
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
