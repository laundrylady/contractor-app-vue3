import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.74c6b69a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.92ab7041.js";
import "./QTd.c012504d.js";
import "./selection.def004c5.js";
import "./QList.5ae951e2.js";
import "./QMenu.067c58bc.js";
import "./QTable.747a4838.js";
import "./QMarkupTable.f383e26a.js";
import "./QSelect.6963eaa7.js";
import "./QItemLabel.e90e0b6c.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.375bd2d2.js";
import "./use-fullscreen.d15bd625.js";
import "./ClosePopup.cbd6ac2a.js";
import "./axios.3f5535ab.js";
import "./StatusTag.c917aabf.js";
import "./QBadge.c1543ff0.js";
import "./debug.972d445d.js";
import "./help.c0f2021d.js";
import "./vue-i18n.runtime.esm-bundler.47501e26.js";
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
