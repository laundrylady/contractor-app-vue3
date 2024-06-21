import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.7c986eb3.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.1e4623ca.js";
import "./QBreadcrumbs.a03f1536.js";
import "./QSelect.61d1736d.js";
import "./selection.20b85f26.js";
import "./QItemLabel.e4e7078f.js";
import "./QMenu.df7f77cc.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.316d3a38.js";
import "./QList.fe09f8cf.js";
import "./QMarkupTable.cb42defd.js";
import "./QLinearProgress.37b0691e.js";
import "./use-fullscreen.89b148c6.js";
import "./axios.2e25613c.js";
import "./DateField.6eb7e53c.js";
import "./QDate.1f021c48.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.68e3003a.js";
import "./QPopupProxy.cb005419.js";
import "./use-quasar.182979dc.js";
import "./OrderListFormat.d6e387a9.js";
import "./QSpace.5fd68663.js";
import "./QBadge.471ae29c.js";
import "./open-url.14910681.js";
import "./debug.b9d7424b.js";
import "./help.a835c626.js";
import "./geolocation.5ca1ae52.js";
import "./StatusTag.3ba01c59.js";
import "./UserAvatar.d248aba3.js";
import "./use-ratio.5e7b578f.js";
import "./security.3fc3e085.js";
import "./vue-i18n.runtime.esm-bundler.4464aed2.js";
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
