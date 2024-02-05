import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.bd44d941.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ec82fb92.js";
import "./QBreadcrumbs.6d7491bc.js";
import "./QSelect.e1a07e28.js";
import "./QItemSection.c8d52540.js";
import "./QItemLabel.51758fb1.js";
import "./QMenu.7e196ef1.js";
import "./selection.559d132e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.1052ce3a.js";
import "./QList.3afe16e8.js";
import "./QMarkupTable.6a8b8a7b.js";
import "./QLinearProgress.0304ba2d.js";
import "./use-fullscreen.df83ed55.js";
import "./axios.866358de.js";
import "./DateField.8dbde3aa.js";
import "./QDate.c2dacd10.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.85a0660d.js";
import "./QPopupProxy.9d3f15cd.js";
import "./use-quasar.2530ae00.js";
import "./OrderListFormat.b3eaf180.js";
import "./QSpace.d04695a7.js";
import "./QBadge.975cf883.js";
import "./open-url.42491aac.js";
import "./debug.b9d7424b.js";
import "./help.78b0a1da.js";
import "./geolocation.5cecdc8c.js";
import "./StatusTag.dfd26109.js";
import "./UserAvatar.f0caa563.js";
import "./use-ratio.ce91b1b0.js";
import "./security.048c7c4b.js";
import "./vue-i18n.runtime.esm-bundler.108136a4.js";
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
