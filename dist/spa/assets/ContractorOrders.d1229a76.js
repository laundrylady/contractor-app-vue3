import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.2156cc9d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ede44c03.js";
import "./QBreadcrumbs.a5ad6082.js";
import "./QSelect.a7cf351c.js";
import "./QItemSection.c6fa25ab.js";
import "./QItemLabel.9a144642.js";
import "./QMenu.63baf54c.js";
import "./selection.9f41e8e1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.597b8059.js";
import "./QList.77b5e4f1.js";
import "./QMarkupTable.13acfe45.js";
import "./QLinearProgress.32b03ca3.js";
import "./use-fullscreen.904cc5dc.js";
import "./axios.e6d93a62.js";
import "./DateField.00e3e9af.js";
import "./QDate.1af219d3.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.17cb7c85.js";
import "./QPopupProxy.5104d215.js";
import "./use-quasar.dca0d230.js";
import "./OrderListFormat.824eb9fc.js";
import "./QSpace.a28baadc.js";
import "./QBadge.a0b3d92a.js";
import "./open-url.f3661115.js";
import "./debug.b9d7424b.js";
import "./help.7e4090d7.js";
import "./geolocation.01530be4.js";
import "./StatusTag.61a56e50.js";
import "./UserAvatar.c2811f14.js";
import "./use-ratio.b5230ab8.js";
import "./security.cb241c32.js";
import "./vue-i18n.runtime.esm-bundler.8913d4b0.js";
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
