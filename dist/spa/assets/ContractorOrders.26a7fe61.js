import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.edd5e7b0.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.743d7681.js";
import "./QTable.ed4938f5.js";
import "./QList.9ba32f52.js";
import "./QMarkupTable.6eacd957.js";
import "./QSelect.dbc7f1c3.js";
import "./QItemSection.d4f7e02a.js";
import "./rtl.e9486434.js";
import "./format.99445b5f.js";
import "./QLinearProgress.b1cba332.js";
import "./use-fullscreen.86dbb208.js";
import "./ClosePopup.74a21213.js";
import "./axios.67dbaacc.js";
import "./StatusTag.ccad8eb4.js";
import "./QBadge.5cb6bd65.js";
import "./debug.805a8aef.js";
import "./help.dfac819e.js";
import "./vue-i18n.runtime.esm-bundler.9f9dd46e.js";
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
