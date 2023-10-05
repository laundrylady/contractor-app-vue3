import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.55dfee13.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.c2e1ea50.js";
import "./QTd.543ee664.js";
import "./selection.32cb74d5.js";
import "./QList.515c802e.js";
import "./QMenu.724d425e.js";
import "./QTable.3c22dbf7.js";
import "./QMarkupTable.437860c2.js";
import "./QSelect.a72f5098.js";
import "./QItemLabel.45251e79.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f81c3374.js";
import "./use-fullscreen.6409340c.js";
import "./ClosePopup.ee423a13.js";
import "./axios.a819d008.js";
import "./StatusTag.420eede6.js";
import "./QBadge.803050db.js";
import "./debug.ffa51329.js";
import "./help.8a1391c5.js";
import "./vue-i18n.runtime.esm-bundler.5ec5d827.js";
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
