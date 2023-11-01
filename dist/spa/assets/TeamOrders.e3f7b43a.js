import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.19075215.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.f6bee7e8.js";
import "./QTd.9cb39365.js";
import "./selection.17eb1196.js";
import "./QList.56bbd19d.js";
import "./QMenu.99b4f319.js";
import "./QTable.89931459.js";
import "./QMarkupTable.fdfc109f.js";
import "./QSelect.ae6eabb7.js";
import "./QItemLabel.58d25c90.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.abddd218.js";
import "./use-fullscreen.a4532333.js";
import "./ClosePopup.7f950f63.js";
import "./axios.7f29f827.js";
import "./StatusTag.e27a89cd.js";
import "./QBadge.f1d90eca.js";
import "./debug.972d445d.js";
import "./help.1753c5fa.js";
import "./vue-i18n.runtime.esm-bundler.86464706.js";
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
