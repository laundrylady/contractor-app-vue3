import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.ae8be5ab.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.ae929d54.js";
import "./QTd.89230022.js";
import "./selection.44495633.js";
import "./QList.a05b399d.js";
import "./QMenu.7ce52867.js";
import "./QTable.05aa0415.js";
import "./QMarkupTable.9b6c085a.js";
import "./QSelect.05b73f42.js";
import "./QItemLabel.224041da.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.841520c7.js";
import "./use-fullscreen.e19f2f57.js";
import "./ClosePopup.50c4dcf7.js";
import "./axios.e451d1c8.js";
import "./StatusTag.92e11e91.js";
import "./QBadge.16d68613.js";
import "./debug.972d445d.js";
import "./help.bd5e4abe.js";
import "./vue-i18n.runtime.esm-bundler.f948aa4d.js";
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
