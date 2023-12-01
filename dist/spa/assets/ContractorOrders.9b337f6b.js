import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.b4e618e5.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.66cb46b4.js";
import "./QTd.ef402c47.js";
import "./QItemSection.4666e141.js";
import "./QList.dfe2e5d5.js";
import "./QMenu.f6771bea.js";
import "./selection.b5ba250c.js";
import "./QTable.a3ceb412.js";
import "./QMarkupTable.1ad071b6.js";
import "./QSelect.bd3b2072.js";
import "./QItemLabel.659b4eae.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.099003b0.js";
import "./use-fullscreen.e33f55c5.js";
import "./ClosePopup.e9e16ef5.js";
import "./axios.c63cbaf5.js";
import "./StatusTag.763d35bf.js";
import "./QBadge.d3446b18.js";
import "./debug.972d445d.js";
import "./help.84b14189.js";
import "./vue-i18n.runtime.esm-bundler.5811abb3.js";
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
