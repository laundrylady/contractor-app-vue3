import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.6ea4cd68.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f1303de0.js";
import "./QBreadcrumbs.94ffc4a5.js";
import "./QSelect.edacc259.js";
import "./QItemSection.c33c006e.js";
import "./QItemLabel.28fdca70.js";
import "./QMenu.005f69e9.js";
import "./selection.1b85c8af.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.8cbf4baf.js";
import "./QList.c126ab9e.js";
import "./QMarkupTable.42d4c22d.js";
import "./QLinearProgress.e87c3f3b.js";
import "./use-fullscreen.6119b2fc.js";
import "./axios.35485f2e.js";
import "./DateField.ce872bf7.js";
import "./QDate.8f601aa0.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.2ab4a77d.js";
import "./QPopupProxy.1346de05.js";
import "./use-quasar.2a34d7dc.js";
import "./OrderListFormat.035ea442.js";
import "./QSpace.f07bc139.js";
import "./QBadge.35492347.js";
import "./open-url.afa26193.js";
import "./debug.b9d7424b.js";
import "./help.3fa7b058.js";
import "./geolocation.44fbc1da.js";
import "./StatusTag.b67ca478.js";
import "./UserAvatar.04ebc1d1.js";
import "./use-ratio.f1e5b191.js";
import "./security.fe7ab2c3.js";
import "./vue-i18n.runtime.esm-bundler.4628bfe7.js";
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
