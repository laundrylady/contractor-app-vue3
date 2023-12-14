import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.37cd43b7.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.3ebb8669.js";
import "./QTd.61538254.js";
import "./QItemSection.0f578e2c.js";
import "./QList.892642cf.js";
import "./QMenu.fceb93d6.js";
import "./selection.fa7fa18d.js";
import "./QTable.e5c456fe.js";
import "./QMarkupTable.1e31a3be.js";
import "./QSelect.f9109c79.js";
import "./QItemLabel.883e39c9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.bb2845c7.js";
import "./use-fullscreen.b854f054.js";
import "./ClosePopup.1076266e.js";
import "./axios.daed506c.js";
import "./StatusTag.324e069a.js";
import "./QBadge.e76bf277.js";
import "./debug.972d445d.js";
import "./help.e5545d22.js";
import "./vue-i18n.runtime.esm-bundler.651b1e9d.js";
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
