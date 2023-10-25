import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.119b3e9e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.fc5b7253.js";
import "./QTd.976a0130.js";
import "./selection.5c80716e.js";
import "./QList.0970dba8.js";
import "./QMenu.e4d44051.js";
import "./QTable.557ac89e.js";
import "./QMarkupTable.04cfc86d.js";
import "./QSelect.6ace0b26.js";
import "./QItemLabel.a0d0e7dd.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.08b85f9b.js";
import "./use-fullscreen.7e04aacc.js";
import "./ClosePopup.c982e528.js";
import "./axios.1c53bd8d.js";
import "./StatusTag.e82d8a38.js";
import "./QBadge.f7f5505f.js";
import "./debug.972d445d.js";
import "./help.4fde57f5.js";
import "./vue-i18n.runtime.esm-bundler.0608c853.js";
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
