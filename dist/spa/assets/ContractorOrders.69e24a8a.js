import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.b752c618.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.287c82d5.js";
import "./QTd.ee2c859d.js";
import "./QItemSection.c886ae50.js";
import "./QList.a2ee3970.js";
import "./QMenu.b7f847d5.js";
import "./selection.d70b1d4a.js";
import "./QTable.8e29dc75.js";
import "./QMarkupTable.94710117.js";
import "./QSelect.25c90bb7.js";
import "./QItemLabel.46c33ec4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b83db418.js";
import "./use-fullscreen.32ffca38.js";
import "./ClosePopup.0b4d9f28.js";
import "./axios.4964e504.js";
import "./StatusTag.fae78990.js";
import "./QBadge.c5646b7c.js";
import "./debug.972d445d.js";
import "./help.38cc707a.js";
import "./vue-i18n.runtime.esm-bundler.8714ade7.js";
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
