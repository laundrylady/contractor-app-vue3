import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.3b3ba1b2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.bb02fd1d.js";
import "./QBreadcrumbs.f326e102.js";
import "./QSelect.d95f058c.js";
import "./QItemSection.de19139f.js";
import "./QItemLabel.cc28cd73.js";
import "./QMenu.4b0088a6.js";
import "./selection.eda2ec96.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.bc678cbc.js";
import "./QList.c9ab0266.js";
import "./QMarkupTable.0f18a815.js";
import "./QLinearProgress.050e2423.js";
import "./use-fullscreen.fc0a4665.js";
import "./axios.c967a096.js";
import "./DateField.75b33868.js";
import "./QDate.2d37702c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.15ae057c.js";
import "./QPopupProxy.8ffed59b.js";
import "./use-quasar.66694a3c.js";
import "./OrderListFormat.25dbb1fa.js";
import "./QSpace.092ec784.js";
import "./QBadge.b0325269.js";
import "./open-url.e8ff97a7.js";
import "./debug.b9d7424b.js";
import "./help.9d09ced6.js";
import "./geolocation.29e40c87.js";
import "./StatusTag.8b4af867.js";
import "./UserAvatar.ecda40f9.js";
import "./use-ratio.8eb67f7f.js";
import "./security.2b8872bb.js";
import "./vue-i18n.runtime.esm-bundler.4841e7f2.js";
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
