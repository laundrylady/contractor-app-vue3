import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.3a5db58d.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, y as createCommentVNode } from "./index.1b2f6b7e.js";
import "./QTable.b80d5afb.js";
import "./QList.aae636d3.js";
import "./QMarkupTable.a087714c.js";
import "./QSelect.c293cd08.js";
import "./QItemSection.bdf28f31.js";
import "./rtl.fb394738.js";
import "./format.4a5cbd2a.js";
import "./QLinearProgress.7eaf7b19.js";
import "./use-fullscreen.d71cfd11.js";
import "./ClosePopup.66fb29ca.js";
import "./axios.628dc831.js";
import "./StatusTag.b5a6adbd.js";
import "./QBadge.4f0c8ced.js";
import "./debug.805a8aef.js";
import "./help.14444ed6.js";
import "./vue-i18n.runtime.esm-bundler.6f81c0d2.js";
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
