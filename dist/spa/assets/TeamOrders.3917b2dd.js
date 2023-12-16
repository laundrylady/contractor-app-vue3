import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.ab9503a4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.94e66b14.js";
import "./QTd.a4169a86.js";
import "./QItemSection.4161e238.js";
import "./QList.c73a12dd.js";
import "./QMenu.3336b015.js";
import "./selection.670e2d60.js";
import "./QTable.4f80b1ca.js";
import "./QMarkupTable.d462bf72.js";
import "./QSelect.66943613.js";
import "./QItemLabel.051732c0.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a7979528.js";
import "./use-fullscreen.74e0466a.js";
import "./ClosePopup.ed4876e8.js";
import "./axios.d02ca954.js";
import "./StatusTag.0b95a799.js";
import "./QBadge.8c48a67e.js";
import "./debug.972d445d.js";
import "./help.47eaabb7.js";
import "./vue-i18n.runtime.esm-bundler.9fceb7a5.js";
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
