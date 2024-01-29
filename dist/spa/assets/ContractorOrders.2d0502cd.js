import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.b0187d88.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e7178dde.js";
import "./QBreadcrumbs.0e4b9f66.js";
import "./QSelect.7f908ff0.js";
import "./QItemSection.b38beb3e.js";
import "./QItemLabel.6e7dc56d.js";
import "./QMenu.e5677d05.js";
import "./selection.07622523.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.4da9d8a4.js";
import "./QList.fa94ef50.js";
import "./QMarkupTable.7d7afe4a.js";
import "./QLinearProgress.9ec06853.js";
import "./use-fullscreen.5af8e47a.js";
import "./axios.a7ba8fcf.js";
import "./DateField.632af162.js";
import "./QDate.77bb485e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.7ed084be.js";
import "./QPopupProxy.eaa0f348.js";
import "./use-quasar.622c5628.js";
import "./OrderListFormat.49ceeb40.js";
import "./QSpace.70a2347c.js";
import "./QBadge.edaeee2e.js";
import "./open-url.d368f1d0.js";
import "./debug.b9d7424b.js";
import "./help.8defe9f3.js";
import "./geolocation.d99fd7c6.js";
import "./StatusTag.0628d76c.js";
import "./UserAvatar.cc327c27.js";
import "./use-ratio.c2912bc4.js";
import "./security.59cf1b84.js";
import "./vue-i18n.runtime.esm-bundler.e0f550c4.js";
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
