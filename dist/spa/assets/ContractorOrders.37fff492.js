import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.75d4b36a.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ed79211e.js";
import "./QBreadcrumbs.b762994d.js";
import "./QSelect.6911260e.js";
import "./QItemSection.7b770257.js";
import "./QItemLabel.e5913664.js";
import "./QMenu.da2c12b1.js";
import "./selection.5a991f3e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.021b4058.js";
import "./QList.ab61c688.js";
import "./QMarkupTable.3bc32064.js";
import "./QLinearProgress.77394baf.js";
import "./use-fullscreen.92326348.js";
import "./axios.eac371de.js";
import "./DateField.bca81dca.js";
import "./QDate.b74e4575.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.a79743cb.js";
import "./QPopupProxy.8fe83a8e.js";
import "./use-quasar.ed8ec77c.js";
import "./OrderListFormat.2c04e0fa.js";
import "./QSpace.75714606.js";
import "./QBadge.909d1dbe.js";
import "./open-url.6fd60796.js";
import "./debug.b9d7424b.js";
import "./help.0abe00d6.js";
import "./geolocation.2e0e6f06.js";
import "./StatusTag.5b6046b7.js";
import "./UserAvatar.286bdd0e.js";
import "./use-ratio.644332ce.js";
import "./security.9143b1d3.js";
import "./vue-i18n.runtime.esm-bundler.e7f40751.js";
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
