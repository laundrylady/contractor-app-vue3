import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.9734e9d9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.3e5b9003.js";
import "./QBreadcrumbs.c365cb98.js";
import "./QSelect.4f2fc8f4.js";
import "./QItemSection.92fddb70.js";
import "./QItemLabel.5ef2da82.js";
import "./QMenu.2bbb5cbb.js";
import "./selection.d071096f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.c9ee905b.js";
import "./QList.b6b2ce02.js";
import "./QMarkupTable.af1b5a0e.js";
import "./QLinearProgress.e8bc2679.js";
import "./use-fullscreen.9105a6b5.js";
import "./axios.2cae4f8f.js";
import "./DateField.720c0a4d.js";
import "./QDate.b0785683.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.16b529d7.js";
import "./QPopupProxy.729dbe2d.js";
import "./use-quasar.6bf44bf7.js";
import "./OrderListFormat.7faed475.js";
import "./QSpace.2282a35a.js";
import "./QBadge.a58fafcf.js";
import "./open-url.c17b8244.js";
import "./debug.b9d7424b.js";
import "./help.7fb2c0cb.js";
import "./geolocation.71c7b0d7.js";
import "./StatusTag.57aaad38.js";
import "./UserAvatar.41874294.js";
import "./use-ratio.6ec9c8c8.js";
import "./security.2ce96ed8.js";
import "./vue-i18n.runtime.esm-bundler.a3efec64.js";
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
