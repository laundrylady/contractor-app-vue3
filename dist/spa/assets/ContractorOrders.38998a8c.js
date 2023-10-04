import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.6dc9ed5c.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.f86c1423.js";
import "./QTd.a2f957c7.js";
import "./selection.5d4507f5.js";
import "./QList.7097a9ef.js";
import "./QMenu.5ad66883.js";
import "./QTable.a8691ec0.js";
import "./QMarkupTable.2011a831.js";
import "./QSelect.821c56cf.js";
import "./QItemLabel.609aa7fc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.96484a09.js";
import "./use-fullscreen.756450d4.js";
import "./ClosePopup.3f4f2836.js";
import "./axios.fa55e436.js";
import "./StatusTag.7e559ef4.js";
import "./QBadge.0a6574c4.js";
import "./debug.ffa51329.js";
import "./help.488c6294.js";
import "./vue-i18n.runtime.esm-bundler.b2fd8681.js";
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
