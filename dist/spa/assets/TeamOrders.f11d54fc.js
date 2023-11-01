import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a9bde8dd.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.a0f14cf2.js";
import "./QTd.14ea8e61.js";
import "./selection.05584ff3.js";
import "./QList.a3f7dd15.js";
import "./QMenu.2624ccd8.js";
import "./QTable.edc70773.js";
import "./QMarkupTable.d7b1f2f5.js";
import "./QSelect.5c6dab7a.js";
import "./QItemLabel.8546f47f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.717241a8.js";
import "./use-fullscreen.6f41937a.js";
import "./ClosePopup.5613aebb.js";
import "./axios.5b326e61.js";
import "./StatusTag.94ef88dc.js";
import "./QBadge.a04a33d5.js";
import "./debug.972d445d.js";
import "./help.66c7b725.js";
import "./vue-i18n.runtime.esm-bundler.5a0a43ce.js";
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
