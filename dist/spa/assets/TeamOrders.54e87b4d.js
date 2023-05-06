import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.15638d78.js";
import { A as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, y as createCommentVNode, q as createBaseVNode } from "./index.15e87dfc.js";
import "./QTable.759037cf.js";
import "./QList.f8adc042.js";
import "./QMarkupTable.b26d5921.js";
import "./QSelect.4af781f0.js";
import "./QItemSection.a02f1455.js";
import "./rtl.4502dde4.js";
import "./format.5b671469.js";
import "./QLinearProgress.f94d5831.js";
import "./use-fullscreen.78aba050.js";
import "./ClosePopup.c72967ec.js";
import "./axios.c48e86d7.js";
import "./StatusTag.b0a98ef3.js";
import "./QBadge.3baf0f11.js";
import "./debug.805a8aef.js";
import "./help.16f9d5c4.js";
import "./vue-i18n.runtime.esm-bundler.32cd485e.js";
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
