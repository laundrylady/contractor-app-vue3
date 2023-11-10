import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.5c5e5188.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.22b0b9b4.js";
import "./QTd.a8e79c9a.js";
import "./selection.b500b957.js";
import "./QList.6feda3eb.js";
import "./QMenu.089cf192.js";
import "./QTable.e8de5206.js";
import "./QMarkupTable.c40d6a81.js";
import "./QSelect.4b7790ca.js";
import "./QItemLabel.0d544038.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.86554976.js";
import "./use-fullscreen.0a0796d3.js";
import "./ClosePopup.1035ec7b.js";
import "./axios.00c19c70.js";
import "./StatusTag.20425050.js";
import "./QBadge.0a45cca3.js";
import "./debug.972d445d.js";
import "./help.cd0beb10.js";
import "./vue-i18n.runtime.esm-bundler.2c0861fc.js";
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
