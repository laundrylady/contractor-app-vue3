import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.d94f4d47.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.6a5c0810.js";
import "./QTd.6fc409ec.js";
import "./QItemSection.cb2915ec.js";
import "./QList.969289e2.js";
import "./QMenu.49b63711.js";
import "./selection.2a9bbdda.js";
import "./QTable.a64cb520.js";
import "./QMarkupTable.047f98d8.js";
import "./QSelect.fde53a09.js";
import "./QItemLabel.64d93eb6.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.85cd81a0.js";
import "./use-fullscreen.205642cc.js";
import "./ClosePopup.22eaac01.js";
import "./axios.83cf9320.js";
import "./StatusTag.b4eefc3b.js";
import "./QBadge.da8585b9.js";
import "./debug.972d445d.js";
import "./help.4330a8b0.js";
import "./vue-i18n.runtime.esm-bundler.213fcb16.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Booking History", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "Below is the complete booking history.", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamOrders",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        _hoisted_3,
        createVNode(_sfc_main$1, {
          team_id: __props.model.id
        }, null, 8, ["team_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
