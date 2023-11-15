import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.ffec3aba.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.96a3f834.js";
import "./QTd.b1497b41.js";
import "./selection.1e405919.js";
import "./QList.b5a66286.js";
import "./QMenu.bc1b86fc.js";
import "./QTable.118042b4.js";
import "./QMarkupTable.c47dbd7d.js";
import "./QSelect.02973d19.js";
import "./QItemLabel.5d90c580.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a85f4616.js";
import "./use-fullscreen.8d093f29.js";
import "./ClosePopup.a29420e5.js";
import "./axios.be3a5f7e.js";
import "./StatusTag.60b8ee36.js";
import "./QBadge.3302adab.js";
import "./debug.972d445d.js";
import "./help.076bc519.js";
import "./vue-i18n.runtime.esm-bundler.096e4e9a.js";
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
