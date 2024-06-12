import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.6cc01450.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.c351ea70.js";
import "./QBreadcrumbs.c67af71b.js";
import "./QSelect.18624813.js";
import "./QItemSection.94fe0bb6.js";
import "./QItemLabel.771d44ff.js";
import "./QMenu.d46ce637.js";
import "./selection.026932bf.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.453fec61.js";
import "./QList.4fa31eab.js";
import "./QMarkupTable.bae50ccc.js";
import "./QLinearProgress.7f9c9afa.js";
import "./use-fullscreen.9a0455d6.js";
import "./axios.631f0c20.js";
import "./DateField.aacfa3b2.js";
import "./QDate.44d3598b.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.0d79b1cb.js";
import "./QPopupProxy.8265dbd7.js";
import "./use-quasar.50bdd181.js";
import "./OrderListFormat.ca7a455e.js";
import "./QSpace.b36031bc.js";
import "./QBadge.0c0de2b4.js";
import "./open-url.4a929ea0.js";
import "./debug.b9d7424b.js";
import "./help.828f3f7d.js";
import "./geolocation.fffff939.js";
import "./StatusTag.60eb1765.js";
import "./UserAvatar.abb5b921.js";
import "./use-ratio.1148309a.js";
import "./security.5b5adbb5.js";
import "./vue-i18n.runtime.esm-bundler.7eb7b990.js";
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
