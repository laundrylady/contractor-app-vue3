import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.62f6cbf5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.eaa20375.js";
import "./QBreadcrumbs.a12b1dfe.js";
import "./QSelect.cfea1f9c.js";
import "./QItemSection.88aaf570.js";
import "./QItemLabel.2a2ce6a2.js";
import "./QMenu.f7a5e5fc.js";
import "./selection.008a7de8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.7bd8a05c.js";
import "./QList.566c2f4d.js";
import "./QMarkupTable.60b87c55.js";
import "./QLinearProgress.f1a4914a.js";
import "./use-fullscreen.cc49ca27.js";
import "./axios.893b6184.js";
import "./DateField.f18e919f.js";
import "./QDate.2e0cfe6c.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.3db0f5a2.js";
import "./QPopupProxy.0522f6ef.js";
import "./use-quasar.47dc7e81.js";
import "./OrderListFormat.fc8c453a.js";
import "./QSpace.da994c42.js";
import "./QBadge.ec797832.js";
import "./open-url.fd1e9f0d.js";
import "./debug.b9d7424b.js";
import "./help.62721eac.js";
import "./geolocation.95f281c2.js";
import "./StatusTag.ba044bb3.js";
import "./UserAvatar.27150dc1.js";
import "./use-ratio.51b66289.js";
import "./security.6701056d.js";
import "./vue-i18n.runtime.esm-bundler.d26036d5.js";
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
