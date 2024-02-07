import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.243f3122.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d0f04a73.js";
import "./QBreadcrumbs.a371cc4d.js";
import "./QSelect.5e8a10a7.js";
import "./QItemSection.0013a550.js";
import "./QItemLabel.f6572a99.js";
import "./QMenu.16247508.js";
import "./selection.c78f3754.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.02c69606.js";
import "./QList.1fec112f.js";
import "./QMarkupTable.9edbe906.js";
import "./QLinearProgress.525cf19d.js";
import "./use-fullscreen.260513ae.js";
import "./axios.ce036634.js";
import "./DateField.4b5f216a.js";
import "./QDate.d916f28f.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.c34b2706.js";
import "./QPopupProxy.12f24536.js";
import "./use-quasar.c3e231b4.js";
import "./OrderListFormat.4fdff26c.js";
import "./QSpace.0b4c9d9e.js";
import "./QBadge.294b7046.js";
import "./open-url.e25300cc.js";
import "./debug.b9d7424b.js";
import "./help.c3afdf0b.js";
import "./geolocation.74424191.js";
import "./StatusTag.341a3ac7.js";
import "./UserAvatar.952ea7fe.js";
import "./use-ratio.a16da87f.js";
import "./security.b6d19a44.js";
import "./vue-i18n.runtime.esm-bundler.6824d5d0.js";
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
