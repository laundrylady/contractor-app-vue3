import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.db1a2f5d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.97c2c6d1.js";
import "./QTd.c4e31207.js";
import "./QItemSection.f2e348a7.js";
import "./QList.a38dce86.js";
import "./QMenu.ea67b5ad.js";
import "./selection.4b973c29.js";
import "./QTable.eeeb72f9.js";
import "./QMarkupTable.57ae8111.js";
import "./QSelect.5af92377.js";
import "./QItemLabel.79ba59e5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.88d354ea.js";
import "./use-fullscreen.a93965f7.js";
import "./ClosePopup.a2712158.js";
import "./axios.8cf8e3fb.js";
import "./StatusTag.bdc6427a.js";
import "./QBadge.2ac28608.js";
import "./debug.972d445d.js";
import "./help.c787d25e.js";
import "./vue-i18n.runtime.esm-bundler.6edc2baf.js";
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
