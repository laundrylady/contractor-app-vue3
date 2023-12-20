import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.d13eb660.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ea83ac5e.js";
import "./QTd.c342f59f.js";
import "./QItemSection.182732df.js";
import "./QList.9aa1ea21.js";
import "./QMenu.942b2136.js";
import "./selection.b6f1b316.js";
import "./QTable.594c8cea.js";
import "./QMarkupTable.ffa7b02e.js";
import "./QSelect.2f76507d.js";
import "./QItemLabel.d7b60bb5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c818bde5.js";
import "./use-fullscreen.7688e507.js";
import "./ClosePopup.6b6daff8.js";
import "./axios.07c2a277.js";
import "./StatusTag.55e1cbc3.js";
import "./QBadge.310f4262.js";
import "./debug.972d445d.js";
import "./help.81f29bfa.js";
import "./vue-i18n.runtime.esm-bundler.eb48415e.js";
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
