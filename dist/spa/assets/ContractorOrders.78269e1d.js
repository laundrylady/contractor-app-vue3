import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.aca16299.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.bb716ce2.js";
import "./QTd.37bb3808.js";
import "./QItemSection.7a6b4067.js";
import "./QList.f59f43fb.js";
import "./QMenu.c9058de9.js";
import "./selection.66302451.js";
import "./QTable.69ea32df.js";
import "./QMarkupTable.fa3feff8.js";
import "./QSelect.2f64cb0f.js";
import "./QItemLabel.bd0a53c1.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3c6bda61.js";
import "./use-fullscreen.b600ae4d.js";
import "./ClosePopup.e9d1f50c.js";
import "./axios.89c45ee7.js";
import "./StatusTag.f56a405e.js";
import "./QBadge.b124d9b4.js";
import "./debug.972d445d.js";
import "./help.8503c7b8.js";
import "./vue-i18n.runtime.esm-bundler.184be17d.js";
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
