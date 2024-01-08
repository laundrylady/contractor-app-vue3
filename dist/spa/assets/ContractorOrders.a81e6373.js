import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.d9bd32b6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.bb082a98.js";
import "./QBreadcrumbs.3271ccb4.js";
import "./QSelect.09b8065a.js";
import "./QItemSection.c390f765.js";
import "./QItemLabel.b2006bcf.js";
import "./QMenu.76fab67d.js";
import "./selection.bfc2e834.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.5d7800f2.js";
import "./QList.86a8068e.js";
import "./QMarkupTable.52ab0c96.js";
import "./QLinearProgress.8f52c73b.js";
import "./use-fullscreen.e322738a.js";
import "./axios.847c91ae.js";
import "./DateField.c662fa9e.js";
import "./QDate.209a8361.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.0b937a7e.js";
import "./QPopupProxy.ad98adb1.js";
import "./use-quasar.4a2a2740.js";
import "./OrderListFormat.52175402.js";
import "./QSpace.05db7357.js";
import "./QBadge.4551a4f2.js";
import "./open-url.094ce02f.js";
import "./debug.b9d7424b.js";
import "./help.08f82b20.js";
import "./geolocation.525675d5.js";
import "./StatusTag.00e540c2.js";
import "./UserAvatar.8f55af60.js";
import "./use-ratio.cec9a002.js";
import "./security.08494a81.js";
import "./vue-i18n.runtime.esm-bundler.79c8463e.js";
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
