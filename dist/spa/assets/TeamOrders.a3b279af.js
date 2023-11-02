import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.c1ec07f3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.df2fd7d3.js";
import "./QTd.eb22b15b.js";
import "./selection.90f9342d.js";
import "./QList.e550f401.js";
import "./QMenu.0c126a98.js";
import "./QTable.086c5de5.js";
import "./QMarkupTable.051508f1.js";
import "./QSelect.d7e689f3.js";
import "./QItemLabel.1f843da5.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.30fd4123.js";
import "./use-fullscreen.c5a41eea.js";
import "./ClosePopup.192cce34.js";
import "./axios.70eadaf1.js";
import "./StatusTag.91c3f7e6.js";
import "./QBadge.20c764c3.js";
import "./debug.972d445d.js";
import "./help.5e924469.js";
import "./vue-i18n.runtime.esm-bundler.fa05fdea.js";
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
