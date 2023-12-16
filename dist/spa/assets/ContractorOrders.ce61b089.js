import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.91119467.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.961c39a4.js";
import "./QTd.cbfe1aea.js";
import "./QItemSection.064b3d7e.js";
import "./QList.8cbd4839.js";
import "./QMenu.6583c653.js";
import "./selection.85ecf339.js";
import "./QTable.0364c19f.js";
import "./QMarkupTable.26f72625.js";
import "./QSelect.dcaf1933.js";
import "./QItemLabel.00cc2551.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d5fb8014.js";
import "./use-fullscreen.3e9a1c97.js";
import "./ClosePopup.643627f2.js";
import "./axios.e9d6ab71.js";
import "./StatusTag.506e3ce8.js";
import "./QBadge.9b047134.js";
import "./debug.972d445d.js";
import "./help.202f749e.js";
import "./vue-i18n.runtime.esm-bundler.03460101.js";
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
