import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.8d8382e7.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.30054b44.js";
import "./QBreadcrumbs.9db4968b.js";
import "./QSelect.4e8099fb.js";
import "./QItemSection.5237c7b8.js";
import "./QItemLabel.38612fc2.js";
import "./QMenu.61881f59.js";
import "./selection.1bd59589.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.afe5ad12.js";
import "./QList.4049eab8.js";
import "./QMarkupTable.00f056b1.js";
import "./QLinearProgress.5bbc301d.js";
import "./use-fullscreen.89c2ba9f.js";
import "./axios.0c10ef76.js";
import "./DateField.3b3d26b5.js";
import "./QDate.ba10843c.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.ff9a0f87.js";
import "./QPopupProxy.fd9a3742.js";
import "./use-quasar.b63399bd.js";
import "./OrderListFormat.36c98d08.js";
import "./QSpace.aaa83f84.js";
import "./QBadge.dc366536.js";
import "./open-url.6a3b3b93.js";
import "./debug.b9d7424b.js";
import "./help.9760c9de.js";
import "./geolocation.bbdd9271.js";
import "./StatusTag.0d01a782.js";
import "./UserAvatar.7c15fcec.js";
import "./use-ratio.1e07a78a.js";
import "./security.a9feb495.js";
import "./vue-i18n.runtime.esm-bundler.a0d7dcab.js";
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
