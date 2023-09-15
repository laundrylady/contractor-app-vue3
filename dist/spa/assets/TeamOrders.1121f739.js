import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.99e01ab3.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.215b345e.js";
import "./QTable.68bc7653.js";
import "./QList.b72ce648.js";
import "./QMarkupTable.fff23233.js";
import "./QSelect.c2766a19.js";
import "./selection.e4641002.js";
import "./QItemLabel.3b457a01.js";
import "./QMenu.2976f8ae.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d11af89a.js";
import "./use-fullscreen.fdd11b89.js";
import "./ClosePopup.f63a0e18.js";
import "./axios.97d585b0.js";
import "./StatusTag.e7a53559.js";
import "./QBadge.2fb0b252.js";
import "./debug.ffa51329.js";
import "./help.e965e5b7.js";
import "./vue-i18n.runtime.esm-bundler.05c3dc24.js";
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
