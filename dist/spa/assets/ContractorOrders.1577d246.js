import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.7cfcb444.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a4ada3b6.js";
import "./QBreadcrumbs.91a3a69d.js";
import "./QSelect.52d57800.js";
import "./QItemSection.75e9d715.js";
import "./QItemLabel.5aa6b1fe.js";
import "./QMenu.ba3bcedb.js";
import "./selection.d7b26d85.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.cd636744.js";
import "./QList.8e181534.js";
import "./QMarkupTable.74185576.js";
import "./QLinearProgress.00c1999f.js";
import "./use-fullscreen.050e6ebb.js";
import "./axios.f7c0b118.js";
import "./DateField.75ad0d9d.js";
import "./QDate.5fdc283f.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.85b40696.js";
import "./QPopupProxy.96878ea8.js";
import "./use-quasar.18c0220b.js";
import "./OrderListFormat.c1efb805.js";
import "./QSpace.93304cfc.js";
import "./QBadge.d269af16.js";
import "./open-url.4ae8c0f8.js";
import "./debug.b9d7424b.js";
import "./help.901f52d6.js";
import "./geolocation.b05836bc.js";
import "./StatusTag.ee7766f1.js";
import "./UserAvatar.0fff05ce.js";
import "./use-ratio.eee5f2fc.js";
import "./security.20b6b3cd.js";
import "./vue-i18n.runtime.esm-bundler.c4e1968e.js";
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
