import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.3713ffa4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2c4e0f9e.js";
import "./QTd.fc8f0d59.js";
import "./QItemSection.9511d199.js";
import "./QList.8698b3dc.js";
import "./QMenu.95505b86.js";
import "./selection.1073a799.js";
import "./QTable.20fca1ab.js";
import "./QMarkupTable.0ef714ac.js";
import "./QSelect.5ff94a5e.js";
import "./QItemLabel.d1fe833d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.28a0e1ce.js";
import "./use-fullscreen.b7857018.js";
import "./ClosePopup.df894245.js";
import "./axios.cd986332.js";
import "./StatusTag.1013b189.js";
import "./QBadge.3cfce1e5.js";
import "./debug.972d445d.js";
import "./help.36b5fb1a.js";
import "./vue-i18n.runtime.esm-bundler.d0b93568.js";
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
