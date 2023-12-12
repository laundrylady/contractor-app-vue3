import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.877b05ce.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.37c212b7.js";
import "./QTd.15da9911.js";
import "./QItemSection.5e196a9b.js";
import "./QList.ac4209d2.js";
import "./QMenu.f3609a1c.js";
import "./selection.327197b1.js";
import "./QTable.371d89f0.js";
import "./QMarkupTable.eaed43ee.js";
import "./QSelect.45446517.js";
import "./QItemLabel.c603d020.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.eff3ada0.js";
import "./use-fullscreen.092f3aa0.js";
import "./ClosePopup.097f38a2.js";
import "./axios.9d82477c.js";
import "./StatusTag.69b8a22e.js";
import "./QBadge.780d835b.js";
import "./debug.972d445d.js";
import "./help.3174e283.js";
import "./vue-i18n.runtime.esm-bundler.caf13709.js";
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
