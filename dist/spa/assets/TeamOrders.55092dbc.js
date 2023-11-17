import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.7bff9e00.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.63251f47.js";
import "./QTd.3185f260.js";
import "./selection.8b22f19f.js";
import "./QList.d50b1a6a.js";
import "./QMenu.f57f59d0.js";
import "./QTable.e27c35fa.js";
import "./QMarkupTable.f549cfc3.js";
import "./QSelect.b1327776.js";
import "./QItemLabel.5719771f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4e6c23eb.js";
import "./use-fullscreen.77851ff3.js";
import "./ClosePopup.0fcd0957.js";
import "./axios.ea3e5b05.js";
import "./StatusTag.5b3602a9.js";
import "./QBadge.2d98f4da.js";
import "./debug.972d445d.js";
import "./help.2c124571.js";
import "./vue-i18n.runtime.esm-bundler.13bf3fac.js";
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
