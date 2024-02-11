import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.3fe54d3e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ed589837.js";
import "./QBreadcrumbs.281561e5.js";
import "./QSelect.82a1fb86.js";
import "./QItemSection.38132acc.js";
import "./QItemLabel.d769c6e6.js";
import "./QMenu.a924692a.js";
import "./selection.6dffb89e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.050912a2.js";
import "./QList.47d456e7.js";
import "./QMarkupTable.dad016bf.js";
import "./QLinearProgress.588f456b.js";
import "./use-fullscreen.2af2a328.js";
import "./axios.69534440.js";
import "./DateField.caec42ce.js";
import "./QDate.099bc99e.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.73ee6687.js";
import "./QPopupProxy.fd88c162.js";
import "./use-quasar.5caddef9.js";
import "./OrderListFormat.2fc720d2.js";
import "./QSpace.d8e480d6.js";
import "./QBadge.2682fbd3.js";
import "./open-url.239ccc0a.js";
import "./debug.b9d7424b.js";
import "./help.06dc735d.js";
import "./geolocation.80c65a4e.js";
import "./StatusTag.cb501dab.js";
import "./UserAvatar.2301cc1b.js";
import "./use-ratio.28e5c57f.js";
import "./security.eaaad228.js";
import "./vue-i18n.runtime.esm-bundler.fa3d19b1.js";
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
