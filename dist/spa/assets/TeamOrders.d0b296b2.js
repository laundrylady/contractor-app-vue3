import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.f7f9e42d.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.a9a574a4.js";
import "./QTd.e485e50a.js";
import "./QItemSection.2b728bb6.js";
import "./QList.0b09280c.js";
import "./QMenu.9d7ea008.js";
import "./selection.95ad5cb4.js";
import "./QTable.320994c7.js";
import "./QMarkupTable.53deca36.js";
import "./QSelect.9067d31a.js";
import "./QItemLabel.09cf120e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.ffb84405.js";
import "./use-fullscreen.0075533c.js";
import "./ClosePopup.9ef9fc4b.js";
import "./axios.24ab5c7c.js";
import "./StatusTag.b39b0bd0.js";
import "./QBadge.d04af7c1.js";
import "./debug.972d445d.js";
import "./help.08e1e70e.js";
import "./vue-i18n.runtime.esm-bundler.54d2114b.js";
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
