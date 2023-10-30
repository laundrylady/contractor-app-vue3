import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.bd7aed4c.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.9390f7b3.js";
import "./QTd.8bb16dee.js";
import "./selection.1e6bc5e4.js";
import "./QList.03085d19.js";
import "./QMenu.86334f4c.js";
import "./QTable.fb774fed.js";
import "./QMarkupTable.f279a2c3.js";
import "./QSelect.93bc558d.js";
import "./QItemLabel.95c4e0d1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.00cd8c52.js";
import "./use-fullscreen.6d4f09e6.js";
import "./ClosePopup.b355fd5e.js";
import "./axios.2d46391f.js";
import "./StatusTag.1b5bd09f.js";
import "./QBadge.07c10188.js";
import "./debug.972d445d.js";
import "./help.06786d1d.js";
import "./vue-i18n.runtime.esm-bundler.b8b2ad26.js";
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
