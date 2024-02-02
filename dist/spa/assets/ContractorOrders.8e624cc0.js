import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.ce1b7eab.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.84f10f3f.js";
import "./QBreadcrumbs.e3dc489f.js";
import "./QSelect.429e8d47.js";
import "./QItemSection.bb85dabb.js";
import "./QItemLabel.44c04347.js";
import "./QMenu.bd1c4216.js";
import "./selection.1ac97dc8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.97a37a05.js";
import "./QList.6cde1eb1.js";
import "./QMarkupTable.ec0874b5.js";
import "./QLinearProgress.d97fea42.js";
import "./use-fullscreen.e17cec5e.js";
import "./axios.0eb76a38.js";
import "./DateField.9b89ac5e.js";
import "./QDate.02cfacfd.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.4cd372bf.js";
import "./QPopupProxy.454f7c4e.js";
import "./use-quasar.b00ec90c.js";
import "./OrderListFormat.ef57332b.js";
import "./QSpace.0cf80666.js";
import "./QBadge.536afb88.js";
import "./open-url.2bb66722.js";
import "./debug.b9d7424b.js";
import "./help.6ab24264.js";
import "./geolocation.44418ddc.js";
import "./StatusTag.ae91c8de.js";
import "./UserAvatar.33902adc.js";
import "./use-ratio.0762bda9.js";
import "./security.bedcb6f4.js";
import "./vue-i18n.runtime.esm-bundler.425df82b.js";
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
