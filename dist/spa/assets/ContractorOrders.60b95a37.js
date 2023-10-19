import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.9054feae.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2cdb50d9.js";
import "./QTd.1e5b9d93.js";
import "./selection.537e3587.js";
import "./QList.2537dc84.js";
import "./QMenu.d2e9389c.js";
import "./QTable.546448b6.js";
import "./QMarkupTable.76dc3ddd.js";
import "./QSelect.3e0c9bea.js";
import "./QItemLabel.8962bf47.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c572f9ca.js";
import "./use-fullscreen.4f0ef3ca.js";
import "./ClosePopup.c8f700c5.js";
import "./axios.44351c56.js";
import "./StatusTag.b7f40eab.js";
import "./QBadge.5760e225.js";
import "./debug.972d445d.js";
import "./help.cfcd358f.js";
import "./vue-i18n.runtime.esm-bundler.26d15bc5.js";
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
