import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.0bf7a23e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2ce3582b.js";
import "./QTd.f99e16c4.js";
import "./QItemSection.e4b7a0b7.js";
import "./QList.46360cd1.js";
import "./QMenu.6b6d9bac.js";
import "./selection.a479002b.js";
import "./QTable.a3096ba9.js";
import "./QMarkupTable.ce8594de.js";
import "./QSelect.3476d9a2.js";
import "./QItemLabel.77097d46.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.16a6d946.js";
import "./use-fullscreen.9ba2e9cd.js";
import "./ClosePopup.45fa0fb0.js";
import "./axios.cd81e1d7.js";
import "./StatusTag.6611f03d.js";
import "./QBadge.dab4bfe7.js";
import "./debug.972d445d.js";
import "./help.80d39f93.js";
import "./vue-i18n.runtime.esm-bundler.9fa5b798.js";
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
