import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.c3767a86.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.335ad1da.js";
import "./QTd.792872b0.js";
import "./selection.da9326cf.js";
import "./QList.e466b6b1.js";
import "./QMenu.0b86dd3d.js";
import "./QTable.eb6a799d.js";
import "./QMarkupTable.e2c36203.js";
import "./QSelect.4287be58.js";
import "./QItemLabel.970ab1b9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.8e4e8aa4.js";
import "./use-fullscreen.c6c293a8.js";
import "./ClosePopup.0ffdfffa.js";
import "./axios.3bfc6a6f.js";
import "./StatusTag.df29c3d0.js";
import "./QBadge.f7f29cf7.js";
import "./debug.ffa51329.js";
import "./help.c8506d61.js";
import "./vue-i18n.runtime.esm-bundler.f85c888b.js";
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
