import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.80990305.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.6ce20806.js";
import "./QBreadcrumbs.0a7ae1c4.js";
import "./QSelect.fc57cce4.js";
import "./QItemSection.2217d3ce.js";
import "./QItemLabel.e051b453.js";
import "./QMenu.4ac57728.js";
import "./selection.a136cbbe.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.9e31b6c6.js";
import "./QList.1b03d57c.js";
import "./QMarkupTable.96ea31ac.js";
import "./QLinearProgress.0aca601b.js";
import "./use-fullscreen.8d62c6e1.js";
import "./axios.dbc23847.js";
import "./DateField.adf9ce03.js";
import "./QDate.b3060d6b.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.e588493d.js";
import "./QPopupProxy.43200ae4.js";
import "./use-quasar.23e2f5cb.js";
import "./OrderListFormat.696477c9.js";
import "./QSpace.d1f5cf21.js";
import "./QBadge.4e1f06a1.js";
import "./open-url.171e9f4d.js";
import "./debug.b9d7424b.js";
import "./help.97d207ee.js";
import "./geolocation.ba565119.js";
import "./StatusTag.68d7aa7d.js";
import "./UserAvatar.f546921e.js";
import "./use-ratio.809069ac.js";
import "./security.01fbf93b.js";
import "./vue-i18n.runtime.esm-bundler.116ee471.js";
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
