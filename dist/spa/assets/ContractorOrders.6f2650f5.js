import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.e0ebdcb6.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.38a6cef2.js";
import "./QBreadcrumbs.14d99dbb.js";
import "./QSelect.cc8bc4a2.js";
import "./selection.2d4eb0bc.js";
import "./QItemLabel.13b2748a.js";
import "./QMenu.c44b3421.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.6b021727.js";
import "./QList.e4894220.js";
import "./QMarkupTable.e40d760d.js";
import "./QLinearProgress.4a13a1eb.js";
import "./use-fullscreen.77fc2967.js";
import "./axios.bc451377.js";
import "./DateField.60e0ab17.js";
import "./QDate.a2b66255.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.b3aadc4b.js";
import "./QPopupProxy.cb00df6f.js";
import "./use-quasar.980bbc2f.js";
import "./OrderListFormat.6e8aad86.js";
import "./QSpace.28f3a53d.js";
import "./QBadge.bfea7392.js";
import "./open-url.2cf10fe8.js";
import "./debug.b9d7424b.js";
import "./help.e062646e.js";
import "./geolocation.edb993b8.js";
import "./StatusTag.da956ecd.js";
import "./UserAvatar.6030980f.js";
import "./use-ratio.02689d61.js";
import "./security.9baa74a8.js";
import "./vue-i18n.runtime.esm-bundler.d8c14fdf.js";
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
