import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.11f74299.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d21e33cc.js";
import "./QTd.ce56fe5d.js";
import "./QItemSection.7dac666d.js";
import "./QList.a9392fd5.js";
import "./QMenu.1b135721.js";
import "./selection.cc5c466e.js";
import "./QTable.e2e9a4bb.js";
import "./QMarkupTable.f5b0afa0.js";
import "./QSelect.1bad7801.js";
import "./QItemLabel.3dfa783e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3a54bcb4.js";
import "./use-fullscreen.a02a15cf.js";
import "./ClosePopup.73889011.js";
import "./axios.1457e981.js";
import "./StatusTag.a2c9bcfe.js";
import "./QBadge.a704caa4.js";
import "./debug.972d445d.js";
import "./help.f60883c6.js";
import "./vue-i18n.runtime.esm-bundler.9906bd5c.js";
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
