import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.2d97e2da.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.88cb70e0.js";
import "./QTd.523a7c04.js";
import "./QItemSection.6791e074.js";
import "./QList.d5ad5eed.js";
import "./QMenu.8216871e.js";
import "./selection.2115d5cc.js";
import "./QTable.d46f4b08.js";
import "./QMarkupTable.59c2e6e6.js";
import "./QSelect.e751b313.js";
import "./QItemLabel.e1f22c7c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b4dd1c0a.js";
import "./use-fullscreen.19be4211.js";
import "./ClosePopup.2e78ad33.js";
import "./axios.9c2c3a49.js";
import "./StatusTag.6a443529.js";
import "./QBadge.accf51ac.js";
import "./debug.972d445d.js";
import "./help.bd514665.js";
import "./vue-i18n.runtime.esm-bundler.1b6c51bb.js";
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
