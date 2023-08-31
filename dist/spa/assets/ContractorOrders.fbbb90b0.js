import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.9372f8e5.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.09db86c6.js";
import "./QTable.ee3cea18.js";
import "./QList.ea43f186.js";
import "./QMarkupTable.319b04dd.js";
import "./QSelect.b914fb42.js";
import "./QItemSection.0ff59c1c.js";
import "./selection.b097d85c.js";
import "./QMenu.f4a75668.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.251b2a6a.js";
import "./use-fullscreen.197d76b4.js";
import "./ClosePopup.a0d8d2e6.js";
import "./axios.a630860f.js";
import "./StatusTag.85823fc3.js";
import "./QBadge.604c1aaa.js";
import "./debug.ffa51329.js";
import "./help.43e74e3a.js";
import "./vue-i18n.runtime.esm-bundler.29e2b259.js";
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
