import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.d1d411fc.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.4ea3bfb0.js";
import "./QTd.4832e323.js";
import "./QItemSection.e253e9f2.js";
import "./QList.1e9d282c.js";
import "./QMenu.77f43e2e.js";
import "./selection.cc8eaae5.js";
import "./QTable.dfb1c02f.js";
import "./QMarkupTable.a4d7d83a.js";
import "./QSelect.03ae6953.js";
import "./QItemLabel.ae3f0e25.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.deaf681c.js";
import "./use-fullscreen.aed669c5.js";
import "./ClosePopup.500dddb7.js";
import "./axios.01559a60.js";
import "./StatusTag.46002365.js";
import "./QBadge.a5d66fe8.js";
import "./debug.972d445d.js";
import "./help.08aba6f6.js";
import "./vue-i18n.runtime.esm-bundler.c0cc40c9.js";
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
