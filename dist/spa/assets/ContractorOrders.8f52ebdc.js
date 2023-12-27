import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.ae4aa478.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, ac as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.e10d985a.js";
import "./QTd.8da700be.js";
import "./QItemSection.79ac2f17.js";
import "./QList.451f9f00.js";
import "./QMenu.42feefcc.js";
import "./selection.8ef2ad40.js";
import "./QTable.d0a0a50d.js";
import "./QMarkupTable.69ebeb35.js";
import "./QSelect.42b6d6ed.js";
import "./QItemLabel.6b47c22a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c610e664.js";
import "./use-fullscreen.f8b09894.js";
import "./ClosePopup.b4388342.js";
import "./axios.d600ee85.js";
import "./StatusTag.ccbe3247.js";
import "./QBadge.8e0e82b9.js";
import "./debug.b9d7424b.js";
import "./help.d45fbea6.js";
import "./vue-i18n.runtime.esm-bundler.9189997e.js";
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
