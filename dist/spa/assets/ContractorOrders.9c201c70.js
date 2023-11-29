import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.85492fc4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a9e72922.js";
import "./QTd.c3181d8a.js";
import "./QItemSection.2292a67b.js";
import "./QList.45d51efb.js";
import "./QMenu.c5bf345e.js";
import "./selection.ed28452f.js";
import "./QTable.6e91f24a.js";
import "./QMarkupTable.b8a57a00.js";
import "./QSelect.a2c9b544.js";
import "./QItemLabel.ce5bdc9d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.6d273969.js";
import "./use-fullscreen.b86b03c4.js";
import "./ClosePopup.66841a52.js";
import "./axios.c72b80e9.js";
import "./StatusTag.d4d0d57f.js";
import "./QBadge.e8ad774a.js";
import "./debug.972d445d.js";
import "./help.f24c7eca.js";
import "./vue-i18n.runtime.esm-bundler.597f55b0.js";
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
