import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.bbbc7435.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.250db7cb.js";
import "./QTd.92202043.js";
import "./selection.e239b0e2.js";
import "./QList.f7c16196.js";
import "./QMenu.af746c65.js";
import "./QTable.716ef000.js";
import "./QMarkupTable.c0562800.js";
import "./QSelect.704d2300.js";
import "./QItemLabel.8ca90bfa.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.834cc941.js";
import "./use-fullscreen.eeaab279.js";
import "./ClosePopup.19ed6c5e.js";
import "./axios.ffd1dad3.js";
import "./StatusTag.b84a710f.js";
import "./QBadge.7fd71993.js";
import "./debug.972d445d.js";
import "./help.9c7320a1.js";
import "./vue-i18n.runtime.esm-bundler.b56ce91d.js";
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
