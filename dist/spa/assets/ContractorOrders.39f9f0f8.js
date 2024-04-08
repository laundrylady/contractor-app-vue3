import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a7a6a19c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d3156251.js";
import "./QBreadcrumbs.3a5d66f8.js";
import "./QSelect.79c41990.js";
import "./QItemSection.33b73aea.js";
import "./QItemLabel.d2e4be10.js";
import "./QMenu.9a6ce7df.js";
import "./selection.d391c5c4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.3be79a0b.js";
import "./QList.1af29f82.js";
import "./QMarkupTable.86e06a5f.js";
import "./QLinearProgress.c4fa5c48.js";
import "./use-fullscreen.4a42a3d8.js";
import "./axios.1f56604e.js";
import "./DateField.3b712a94.js";
import "./QDate.44d8fd88.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.0cd1934d.js";
import "./QPopupProxy.3f3702ac.js";
import "./use-quasar.9deb93be.js";
import "./OrderListFormat.a0c5625e.js";
import "./QSpace.38d28364.js";
import "./QBadge.064b7fe3.js";
import "./open-url.b22b4aab.js";
import "./debug.b9d7424b.js";
import "./help.3c3ace11.js";
import "./geolocation.66c049a4.js";
import "./StatusTag.bf50c98f.js";
import "./UserAvatar.8a4b3fff.js";
import "./use-ratio.6ca466a6.js";
import "./security.2799e81a.js";
import "./vue-i18n.runtime.esm-bundler.f58388e7.js";
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
