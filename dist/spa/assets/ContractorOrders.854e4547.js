import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.43eb4b3a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.84fae5f5.js";
import "./QBreadcrumbs.4746d786.js";
import "./QSelect.475b8e0a.js";
import "./QItemSection.4b58462e.js";
import "./QItemLabel.f3630861.js";
import "./QMenu.f4739337.js";
import "./selection.e385e751.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.47f7e83c.js";
import "./QList.2ea35998.js";
import "./QMarkupTable.01d2b308.js";
import "./QLinearProgress.8b51937f.js";
import "./use-fullscreen.bf4d3b8a.js";
import "./axios.8eb63b42.js";
import "./DateField.764a577b.js";
import "./QDate.37eb686c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.ef22a670.js";
import "./QPopupProxy.084b25d2.js";
import "./use-quasar.a6c17b87.js";
import "./OrderListFormat.30136631.js";
import "./QSpace.092c4cd3.js";
import "./QBadge.41652fc1.js";
import "./open-url.5417eb87.js";
import "./debug.b9d7424b.js";
import "./help.41c94128.js";
import "./geolocation.be218fd0.js";
import "./StatusTag.4be542e4.js";
import "./UserAvatar.9ad8d04f.js";
import "./use-ratio.6caf71a3.js";
import "./security.f4614f20.js";
import "./vue-i18n.runtime.esm-bundler.934c6f51.js";
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
