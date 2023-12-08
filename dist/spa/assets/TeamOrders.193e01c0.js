import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.28ee5d82.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.63b592af.js";
import "./QTd.b9686ba7.js";
import "./QItemSection.03eb98a3.js";
import "./QList.a924fe89.js";
import "./QMenu.031fddcf.js";
import "./selection.a36acfd9.js";
import "./QTable.9d07b895.js";
import "./QMarkupTable.235eee66.js";
import "./QSelect.970ac209.js";
import "./QItemLabel.44ca075e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c661a330.js";
import "./use-fullscreen.4bdc8510.js";
import "./ClosePopup.e3091d70.js";
import "./axios.b31c451b.js";
import "./StatusTag.05d6f932.js";
import "./QBadge.fc8cefa4.js";
import "./debug.972d445d.js";
import "./help.f213e400.js";
import "./vue-i18n.runtime.esm-bundler.17ce624c.js";
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
