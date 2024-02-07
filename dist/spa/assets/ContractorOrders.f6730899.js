import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.2987e672.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e779ed8f.js";
import "./QBreadcrumbs.1e451095.js";
import "./QSelect.efa5c686.js";
import "./QItemSection.f918b325.js";
import "./QItemLabel.bc19708c.js";
import "./QMenu.cc9f3b0e.js";
import "./selection.c62381cb.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.2d37b598.js";
import "./QList.d7a8620b.js";
import "./QMarkupTable.37c91a74.js";
import "./QLinearProgress.8aba57b9.js";
import "./use-fullscreen.146fe1c2.js";
import "./axios.4751c363.js";
import "./DateField.ce91c52a.js";
import "./QDate.a9b87ce9.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.fb9b1bb2.js";
import "./QPopupProxy.5d494119.js";
import "./use-quasar.c2ee5c41.js";
import "./OrderListFormat.c6a0303e.js";
import "./QSpace.f1d34cdd.js";
import "./QBadge.7efcdcea.js";
import "./open-url.eeb31964.js";
import "./debug.b9d7424b.js";
import "./help.1405747b.js";
import "./geolocation.3aa4bb0c.js";
import "./StatusTag.ad61df4f.js";
import "./UserAvatar.4a3ec619.js";
import "./use-ratio.3ade4d9e.js";
import "./security.fa89d484.js";
import "./vue-i18n.runtime.esm-bundler.96bf6af0.js";
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
