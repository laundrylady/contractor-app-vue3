import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.368ed778.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.0e8eff46.js";
import "./QBreadcrumbs.b8ac35ef.js";
import "./QSelect.bbed4941.js";
import "./QItemSection.2576283a.js";
import "./QItemLabel.9fe3a93e.js";
import "./QMenu.dc565f24.js";
import "./selection.3f803eae.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.8878ceaf.js";
import "./QList.60da52b1.js";
import "./QMarkupTable.c444eb55.js";
import "./QLinearProgress.0189d586.js";
import "./use-fullscreen.3a8a816d.js";
import "./axios.8c9aa2c6.js";
import "./DateField.2cc86f00.js";
import "./QDate.6dd0b1d3.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.dd356fc8.js";
import "./QPopupProxy.63d692fe.js";
import "./use-quasar.ac29de23.js";
import "./OrderListFormat.73d9ec00.js";
import "./QSpace.e6ea37b2.js";
import "./QBadge.cf89db98.js";
import "./open-url.87c3f323.js";
import "./debug.b9d7424b.js";
import "./help.51652874.js";
import "./geolocation.14068deb.js";
import "./StatusTag.d83d2b07.js";
import "./UserAvatar.9430e21f.js";
import "./use-ratio.82471290.js";
import "./security.a7d685c7.js";
import "./vue-i18n.runtime.esm-bundler.93662a26.js";
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
