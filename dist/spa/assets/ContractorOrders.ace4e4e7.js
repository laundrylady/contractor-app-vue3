import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.be2ee55b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.79597c2e.js";
import "./QBreadcrumbs.3a5c50c1.js";
import "./QSelect.d6f8aa01.js";
import "./QItemSection.e7a6db3d.js";
import "./QItemLabel.18ff4fa7.js";
import "./QMenu.d438562b.js";
import "./selection.31a8599a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.4691bf46.js";
import "./QList.7eaafeae.js";
import "./QMarkupTable.4a713a4b.js";
import "./QLinearProgress.d2ca0e81.js";
import "./use-fullscreen.14b2f495.js";
import "./axios.e833d5f6.js";
import "./DateField.c2eb0a99.js";
import "./QDate.878a3690.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.94e059c2.js";
import "./QPopupProxy.5c000043.js";
import "./use-quasar.b95807ab.js";
import "./OrderListFormat.4bb2349b.js";
import "./QSpace.eb982f4c.js";
import "./QBadge.2b59719a.js";
import "./open-url.4afa9d34.js";
import "./debug.b9d7424b.js";
import "./help.6a218093.js";
import "./geolocation.747f6f82.js";
import "./StatusTag.731035af.js";
import "./UserAvatar.780072a7.js";
import "./use-ratio.054892df.js";
import "./security.59a6e85f.js";
import "./vue-i18n.runtime.esm-bundler.efac7c1e.js";
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
