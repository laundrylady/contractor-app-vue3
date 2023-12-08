import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.c277a400.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.439f6236.js";
import "./QTd.c986cb65.js";
import "./QItemSection.17637cbf.js";
import "./QList.aae51351.js";
import "./QMenu.537a7799.js";
import "./selection.73cc12e4.js";
import "./QTable.8d0da59d.js";
import "./QMarkupTable.1b517b2f.js";
import "./QSelect.fe07d48e.js";
import "./QItemLabel.ac4e31dc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4fb0aedb.js";
import "./use-fullscreen.d688aa89.js";
import "./ClosePopup.51c7b908.js";
import "./axios.77c66b00.js";
import "./StatusTag.2f911575.js";
import "./QBadge.d8f94e4d.js";
import "./debug.972d445d.js";
import "./help.7be4cca3.js";
import "./vue-i18n.runtime.esm-bundler.ed4341f4.js";
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
