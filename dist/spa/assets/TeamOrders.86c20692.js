import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a6c20514.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.1fffc460.js";
import "./QTd.265f9e1d.js";
import "./selection.e2a402a4.js";
import "./QList.20eb8605.js";
import "./QMenu.f24ff997.js";
import "./QTable.1392a9c5.js";
import "./QMarkupTable.07cf3b8c.js";
import "./QSelect.b28ce4ba.js";
import "./QItemLabel.a0e0b136.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.dfaeffa3.js";
import "./use-fullscreen.e2f8b279.js";
import "./ClosePopup.3c791ea1.js";
import "./axios.b822c0d0.js";
import "./StatusTag.e31c6ca8.js";
import "./QBadge.e01d72ae.js";
import "./debug.ffa51329.js";
import "./help.b605acf3.js";
import "./vue-i18n.runtime.esm-bundler.e500f527.js";
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
