import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.f31fcd76.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.a868d555.js";
import "./QTable.c251911b.js";
import "./QList.c5d665a0.js";
import "./QMarkupTable.7ac3ecec.js";
import "./QSelect.f4199137.js";
import "./selection.2e6c8ab7.js";
import "./QItemLabel.b4dfa054.js";
import "./QMenu.b68ab337.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c400dfe9.js";
import "./use-fullscreen.a5b41356.js";
import "./ClosePopup.bd072460.js";
import "./axios.a7f4982f.js";
import "./StatusTag.c72357a2.js";
import "./QBadge.b619d8d2.js";
import "./debug.ffa51329.js";
import "./help.d1a186e3.js";
import "./vue-i18n.runtime.esm-bundler.9a3523aa.js";
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
