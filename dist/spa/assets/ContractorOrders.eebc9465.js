import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.92d5cc06.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.b04b1049.js";
import "./QTable.5dcfb98e.js";
import "./QList.02c43971.js";
import "./QMarkupTable.13166594.js";
import "./QSelect.0f362143.js";
import "./selection.347263e5.js";
import "./QItemLabel.21af0eb9.js";
import "./QMenu.53748de8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b8803ded.js";
import "./use-fullscreen.db269951.js";
import "./ClosePopup.6677deda.js";
import "./axios.aaf6f9f0.js";
import "./StatusTag.90bed08c.js";
import "./QBadge.82ef3b48.js";
import "./debug.ffa51329.js";
import "./help.3cb757e9.js";
import "./vue-i18n.runtime.esm-bundler.dde8739a.js";
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
