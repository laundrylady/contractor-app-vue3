import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.f2e196d4.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.6bc9da2c.js";
import "./QTd.a9920d07.js";
import "./selection.e81ada06.js";
import "./QList.717bbc17.js";
import "./QMenu.e11d66d0.js";
import "./QTable.68932e9b.js";
import "./QMarkupTable.23e5ddc7.js";
import "./QSelect.a5c2fbfb.js";
import "./QItemLabel.c0748dc1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.11b09821.js";
import "./use-fullscreen.0cb3dfb7.js";
import "./ClosePopup.3c12de3d.js";
import "./axios.d0b87e4b.js";
import "./StatusTag.6ed25845.js";
import "./QBadge.25bc39e6.js";
import "./debug.ffa51329.js";
import "./help.d97f77b7.js";
import "./vue-i18n.runtime.esm-bundler.df22dc7c.js";
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
