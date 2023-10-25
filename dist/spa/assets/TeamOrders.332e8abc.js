import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.e81ce6fa.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.fbe50061.js";
import "./QTd.b14cf39d.js";
import "./selection.87801179.js";
import "./QList.bf907c35.js";
import "./QMenu.7187a648.js";
import "./QTable.648f47ea.js";
import "./QMarkupTable.84318991.js";
import "./QSelect.46e9e734.js";
import "./QItemLabel.7c9eb75e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.31e6377d.js";
import "./use-fullscreen.d808bef0.js";
import "./ClosePopup.af1c7bd1.js";
import "./axios.18ded2a9.js";
import "./StatusTag.e25bd456.js";
import "./QBadge.5df903b6.js";
import "./debug.972d445d.js";
import "./help.3381b671.js";
import "./vue-i18n.runtime.esm-bundler.95e7ad8b.js";
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
