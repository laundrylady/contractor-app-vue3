import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.3300726c.js";
import { C as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ad as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a50f0974.js";
import "./QBreadcrumbs.d53657e1.js";
import "./QSelect.ac3eca91.js";
import "./QItemSection.7d46b3d2.js";
import "./QItemLabel.88b8edd9.js";
import "./QMenu.089357e7.js";
import "./selection.59b1330f.js";
import "./rtl.276c3f1b.js";
import "./format.de7e9769.js";
import "./QTable.86572424.js";
import "./QList.bd61b03b.js";
import "./QMarkupTable.56ea2cf6.js";
import "./QLinearProgress.f26df715.js";
import "./use-fullscreen.9d5ffbe5.js";
import "./axios.75f2feb3.js";
import "./DateField.d9771d9a.js";
import "./QDate.c7556a3e.js";
import "./use-render-cache.3aae9b27.js";
import "./ClosePopup.f3911c03.js";
import "./QPopupProxy.019a9ef8.js";
import "./use-quasar.fe4c2577.js";
import "./OrderListFormat.92db5842.js";
import "./QSpace.2acee95d.js";
import "./QBadge.75adc3d1.js";
import "./open-url.06dfb6bf.js";
import "./debug.b9d7424b.js";
import "./help.67ed6268.js";
import "./geolocation.607b0a4d.js";
import "./StatusTag.cc95f754.js";
import "./UserAvatar.356c0437.js";
import "./use-ratio.a6e11f3b.js";
import "./security.a8c9cf3b.js";
import "./vue-i18n.runtime.esm-bundler.7876e79e.js";
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
