import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.2883bd74.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.8de11d6d.js";
import "./QTd.3b34613a.js";
import "./selection.75389d92.js";
import "./QList.a9d4468b.js";
import "./QMenu.4d0a913d.js";
import "./QTable.bf5c384e.js";
import "./QMarkupTable.10072cf2.js";
import "./QSelect.4e73c653.js";
import "./QItemLabel.9fda1830.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1941d50c.js";
import "./use-fullscreen.ec46c544.js";
import "./ClosePopup.7febde52.js";
import "./axios.c31e8ac7.js";
import "./StatusTag.28d7b942.js";
import "./QBadge.ec01669e.js";
import "./debug.ffa51329.js";
import "./help.e41a7357.js";
import "./vue-i18n.runtime.esm-bundler.9f540518.js";
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
