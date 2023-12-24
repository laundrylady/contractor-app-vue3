import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.10400afd.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.603eb027.js";
import "./QTd.bcc6eb6a.js";
import "./QItemSection.99553ed2.js";
import "./QList.efd19b74.js";
import "./QMenu.15535491.js";
import "./selection.67008780.js";
import "./QTable.0c443eac.js";
import "./QMarkupTable.b2060a35.js";
import "./QSelect.9906ea99.js";
import "./QItemLabel.5abed41a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0616c0f0.js";
import "./use-fullscreen.18a5b6b4.js";
import "./ClosePopup.6ecc7a6f.js";
import "./axios.fc054a7a.js";
import "./StatusTag.a766662c.js";
import "./QBadge.c6e65974.js";
import "./debug.972d445d.js";
import "./help.42cbd537.js";
import "./vue-i18n.runtime.esm-bundler.902c037f.js";
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
