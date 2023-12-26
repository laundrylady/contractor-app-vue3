import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.6c5fd92d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.15617fb1.js";
import "./QTd.df341b2a.js";
import "./QItemSection.07f2a647.js";
import "./QList.88526380.js";
import "./QMenu.da80f610.js";
import "./selection.87a5c733.js";
import "./QTable.30cd0312.js";
import "./QMarkupTable.594dd34e.js";
import "./QSelect.845f27da.js";
import "./QItemLabel.e42ef0a6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.38cc5a86.js";
import "./use-fullscreen.6aea0a26.js";
import "./ClosePopup.a09d7ffb.js";
import "./axios.2945dda0.js";
import "./StatusTag.7fb43bdc.js";
import "./QBadge.cd02b21c.js";
import "./debug.b9d7424b.js";
import "./help.4d9a3595.js";
import "./vue-i18n.runtime.esm-bundler.9a55453d.js";
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
