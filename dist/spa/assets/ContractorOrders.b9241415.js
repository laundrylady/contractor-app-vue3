import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8a63cd76.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.4d63580c.js";
import "./QBreadcrumbs.a1dc4fe8.js";
import "./QSelect.1e082333.js";
import "./format.eea8744c.js";
import "./QItemLabel.9e02e9cb.js";
import "./selection.61bdbeb8.js";
import "./rtl.b51694b1.js";
import "./QTable.8c01b04e.js";
import "./QList.b2f00f55.js";
import "./QMarkupTable.365e3f99.js";
import "./QLinearProgress.c141117e.js";
import "./use-fullscreen.b13201d6.js";
import "./axios.80bd9ce9.js";
import "./DateField.e433f161.js";
import "./QDate.60d7a89b.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.bf718225.js";
import "./QPopupProxy.341af208.js";
import "./use-quasar.c0d0135c.js";
import "./OrderListFormat.a34bbc3a.js";
import "./QToolbarTitle.49b8a1b0.js";
import "./QSpace.3eb453ef.js";
import "./QToolbar.54de0628.js";
import "./QBadge.a53e40a3.js";
import "./index.esm.a81c3694.js";
import "./debug.b9d7424b.js";
import "./help.b5149410.js";
import "./security.c9465d01.js";
import "./helpers.4c9a6e38.js";
import "./vue-i18n.runtime.esm-bundler.1b1d6f8b.js";
import "./OrderContractorManagement.f34489f8.js";
import "./UserAvatar.777a261a.js";
import "./QImg.2ad3a31d.js";
import "./use-ratio.c068e323.js";
import "./open-url.428909ae.js";
import "./geolocation.16bff1ae.js";
import "./StatusTag.52caf9f4.js";
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
