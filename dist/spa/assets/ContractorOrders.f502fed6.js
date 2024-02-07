import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.fd413f38.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.1eb7e0d4.js";
import "./QBreadcrumbs.fd3e370d.js";
import "./QSelect.fa861b56.js";
import "./QItemSection.0a3073f2.js";
import "./QItemLabel.6e713f73.js";
import "./QMenu.0b4964dc.js";
import "./selection.5c6b169c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.ee41f881.js";
import "./QList.d89d0d51.js";
import "./QMarkupTable.02fca499.js";
import "./QLinearProgress.32da5726.js";
import "./use-fullscreen.3e183592.js";
import "./axios.40586be7.js";
import "./DateField.22ee310e.js";
import "./QDate.a8d23c1e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.da81dda1.js";
import "./QPopupProxy.1bf422fe.js";
import "./use-quasar.2b156f71.js";
import "./OrderListFormat.164158ad.js";
import "./QSpace.30d988ee.js";
import "./QBadge.20bb3f69.js";
import "./open-url.2c404c85.js";
import "./debug.b9d7424b.js";
import "./help.21326656.js";
import "./geolocation.a6c1f922.js";
import "./StatusTag.7491ac45.js";
import "./UserAvatar.7b76b362.js";
import "./use-ratio.0ee415c2.js";
import "./security.b23850ac.js";
import "./vue-i18n.runtime.esm-bundler.ef3216b5.js";
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
