import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.94b4acb1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e4348715.js";
import "./QTd.3bb53e93.js";
import "./QItemSection.71de5245.js";
import "./QList.69ea1d7e.js";
import "./QMenu.ae36f817.js";
import "./selection.97a9cfee.js";
import "./QTable.6cd06599.js";
import "./QMarkupTable.0f00cfa5.js";
import "./QSelect.0457cf29.js";
import "./QItemLabel.adad20e3.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.476ddcfd.js";
import "./use-fullscreen.17bf8a4f.js";
import "./ClosePopup.a2540220.js";
import "./axios.5f357301.js";
import "./StatusTag.284a000d.js";
import "./QBadge.242a7360.js";
import "./debug.972d445d.js";
import "./help.4ff0f899.js";
import "./vue-i18n.runtime.esm-bundler.5befbb4d.js";
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
