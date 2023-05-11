import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.bc3c59b7.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.2706d944.js";
import "./QTable.d62f1e5e.js";
import "./QList.5b3facef.js";
import "./QMarkupTable.d71103c4.js";
import "./QSelect.85750e6d.js";
import "./QItemSection.27d6c59c.js";
import "./rtl.cffc13f7.js";
import "./format.cebc1930.js";
import "./QLinearProgress.f97bb233.js";
import "./use-fullscreen.47004d73.js";
import "./ClosePopup.331a5eb4.js";
import "./axios.8e14cdcb.js";
import "./StatusTag.288a344a.js";
import "./QBadge.599d0aed.js";
import "./debug.805a8aef.js";
import "./help.04414549.js";
import "./vue-i18n.runtime.esm-bundler.589a2cd6.js";
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
