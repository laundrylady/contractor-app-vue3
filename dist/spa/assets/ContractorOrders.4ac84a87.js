import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a33bb46e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a490d332.js";
import "./QTd.95adcb3a.js";
import "./QItemSection.86560840.js";
import "./QList.b056649b.js";
import "./QMenu.387b43cd.js";
import "./selection.fdb5b4b5.js";
import "./QTable.0ae08e76.js";
import "./QMarkupTable.da81ccac.js";
import "./QSelect.e1d50312.js";
import "./QItemLabel.3989da6b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.48798e1a.js";
import "./use-fullscreen.e53f3912.js";
import "./ClosePopup.47e177fe.js";
import "./axios.dbbbd0df.js";
import "./StatusTag.884747aa.js";
import "./QBadge.f0af53e9.js";
import "./debug.972d445d.js";
import "./help.817e88f7.js";
import "./vue-i18n.runtime.esm-bundler.4f4732d7.js";
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
