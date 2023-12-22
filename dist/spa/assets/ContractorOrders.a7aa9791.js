import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.6f63d488.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.686b673d.js";
import "./QTd.249f61a9.js";
import "./QItemSection.b28f66fd.js";
import "./QList.caef0d9e.js";
import "./QMenu.2860289c.js";
import "./selection.4d4b9158.js";
import "./QTable.468343b9.js";
import "./QMarkupTable.11edc78a.js";
import "./QSelect.8e055004.js";
import "./QItemLabel.0f1a7d32.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.035c903b.js";
import "./use-fullscreen.27febd7a.js";
import "./ClosePopup.7423f14c.js";
import "./axios.fca9b24c.js";
import "./StatusTag.f434e0dc.js";
import "./QBadge.8ca33444.js";
import "./debug.972d445d.js";
import "./help.2365647d.js";
import "./vue-i18n.runtime.esm-bundler.07055c20.js";
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
