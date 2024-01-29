import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.771b1d0c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.288d251c.js";
import "./QBreadcrumbs.a23de121.js";
import "./QSelect.7f1b0f73.js";
import "./QItemSection.d010cada.js";
import "./QItemLabel.f1754452.js";
import "./QMenu.7ebf623a.js";
import "./selection.71e3adfb.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QTable.1008c514.js";
import "./QList.2c25dc57.js";
import "./QMarkupTable.8db2a827.js";
import "./QLinearProgress.0b5f9f60.js";
import "./use-fullscreen.bc49e914.js";
import "./axios.60d7f612.js";
import "./DateField.19296fd2.js";
import "./QDate.fc992a85.js";
import "./use-cache.b0833c75.js";
import "./ClosePopup.29b1e7c6.js";
import "./QPopupProxy.cce93947.js";
import "./use-quasar.85fb8861.js";
import "./OrderListFormat.3a6c4137.js";
import "./QSpace.362bfb5b.js";
import "./QBadge.3886bb80.js";
import "./open-url.aefeea46.js";
import "./debug.b9d7424b.js";
import "./help.c5612f95.js";
import "./geolocation.54a21145.js";
import "./StatusTag.fde5c2fe.js";
import "./UserAvatar.a5d0f02b.js";
import "./use-ratio.9434ad3d.js";
import "./security.8d987cb7.js";
import "./vue-i18n.runtime.esm-bundler.a1040cbe.js";
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
