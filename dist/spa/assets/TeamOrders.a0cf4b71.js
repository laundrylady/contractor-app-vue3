import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.6b07dd54.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.dab5106a.js";
import "./QTd.df1b842c.js";
import "./selection.94631991.js";
import "./QList.00b0efce.js";
import "./QMenu.0bf5e7da.js";
import "./QTable.1e9e508e.js";
import "./QMarkupTable.35bca243.js";
import "./QSelect.458f17c3.js";
import "./QItemLabel.d1e72a45.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.8e99e26c.js";
import "./use-fullscreen.446b3232.js";
import "./ClosePopup.de216a77.js";
import "./axios.c4336e75.js";
import "./StatusTag.1b971f56.js";
import "./QBadge.486c5971.js";
import "./debug.972d445d.js";
import "./help.d32e816a.js";
import "./vue-i18n.runtime.esm-bundler.b3d96e29.js";
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
