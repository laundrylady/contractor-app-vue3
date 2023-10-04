import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.138a4784.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.8169762b.js";
import "./QTd.25661580.js";
import "./selection.5b06526d.js";
import "./QList.44d753a9.js";
import "./QMenu.e55bc21e.js";
import "./QTable.ec671626.js";
import "./QMarkupTable.8c055e77.js";
import "./QSelect.c057f867.js";
import "./QItemLabel.da0d590a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.6fc03437.js";
import "./use-fullscreen.e85d23d0.js";
import "./ClosePopup.c7194c55.js";
import "./axios.a26d4bb7.js";
import "./StatusTag.480dc29e.js";
import "./QBadge.bb623aa8.js";
import "./debug.ffa51329.js";
import "./help.c20124ee.js";
import "./vue-i18n.runtime.esm-bundler.2f316ef8.js";
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
