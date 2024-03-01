import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.1e83d9ec.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.31045b05.js";
import "./QBreadcrumbs.72fc0d00.js";
import "./QSelect.cbe80149.js";
import "./QItemSection.b30406d4.js";
import "./QItemLabel.23106495.js";
import "./QMenu.ce1f7a40.js";
import "./selection.586c32ec.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.53c9d1aa.js";
import "./QList.aab0626c.js";
import "./QMarkupTable.1732d005.js";
import "./QLinearProgress.1e9eb9ac.js";
import "./use-fullscreen.326b7fbb.js";
import "./axios.ff12253a.js";
import "./DateField.f04bde71.js";
import "./QDate.5359cb49.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.2ac91901.js";
import "./QPopupProxy.63df2b97.js";
import "./use-quasar.7fca5f86.js";
import "./OrderListFormat.102b01c8.js";
import "./QSpace.887c3ba0.js";
import "./QBadge.36510527.js";
import "./open-url.34fb666b.js";
import "./debug.b9d7424b.js";
import "./help.5be86c1c.js";
import "./geolocation.d61230ce.js";
import "./StatusTag.5b93e0b6.js";
import "./UserAvatar.1df26fff.js";
import "./use-ratio.f025924f.js";
import "./security.8ae2c0fb.js";
import "./vue-i18n.runtime.esm-bundler.4fdb9135.js";
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
