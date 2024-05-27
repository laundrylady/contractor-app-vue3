import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.e4f238a7.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.26ecc84c.js";
import "./QBreadcrumbs.70f0d401.js";
import "./QSelect.2948296f.js";
import "./QItemSection.d61f97d4.js";
import "./QItemLabel.869e1563.js";
import "./QMenu.96ee2f21.js";
import "./selection.2b49221b.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.18953739.js";
import "./QList.ee9af6a8.js";
import "./QMarkupTable.d0bda802.js";
import "./QLinearProgress.4ef1995e.js";
import "./use-fullscreen.727b753d.js";
import "./axios.942456e6.js";
import "./DateField.256b1514.js";
import "./QDate.ca78e539.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.a14ea6af.js";
import "./QPopupProxy.f6c3d28d.js";
import "./use-quasar.52795b41.js";
import "./OrderListFormat.58ab5453.js";
import "./QSpace.933cabad.js";
import "./QBadge.3c20230f.js";
import "./open-url.0c00574a.js";
import "./debug.b9d7424b.js";
import "./help.c16653b0.js";
import "./geolocation.4aa5cd78.js";
import "./StatusTag.55c861c6.js";
import "./UserAvatar.ad1c4106.js";
import "./use-ratio.a305fccc.js";
import "./security.1d60ffdc.js";
import "./vue-i18n.runtime.esm-bundler.665f9d02.js";
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
