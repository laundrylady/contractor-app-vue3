import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.73ed7d88.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f668ef97.js";
import "./QBreadcrumbs.2353704a.js";
import "./QSelect.0937f97b.js";
import "./QItemSection.d80474bd.js";
import "./QItemLabel.32bc7e20.js";
import "./QMenu.eb68df62.js";
import "./selection.ee9589e2.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.dc241e65.js";
import "./QList.d9275854.js";
import "./QMarkupTable.0e150959.js";
import "./QLinearProgress.7ee1194e.js";
import "./use-fullscreen.01b6659f.js";
import "./axios.baad754f.js";
import "./DateField.505e738d.js";
import "./QDate.0c193a95.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.50d641af.js";
import "./QPopupProxy.b071a2c6.js";
import "./use-quasar.2811a6cf.js";
import "./OrderListFormat.601d6925.js";
import "./QSpace.884594e5.js";
import "./QBadge.f7bba4da.js";
import "./open-url.eae0bcbc.js";
import "./debug.b9d7424b.js";
import "./help.6bbe450b.js";
import "./geolocation.72b53922.js";
import "./StatusTag.3ba75f73.js";
import "./UserAvatar.32389d38.js";
import "./use-ratio.a17731b6.js";
import "./security.09f8de84.js";
import "./vue-i18n.runtime.esm-bundler.8dab9d85.js";
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
