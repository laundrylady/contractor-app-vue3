import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.11046554.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.f35da196.js";
import "./QTd.3b44ecb9.js";
import "./QItemSection.80e113b3.js";
import "./QList.5f89f18c.js";
import "./QMenu.972373ea.js";
import "./selection.08e2461f.js";
import "./QTable.2b96ff93.js";
import "./QMarkupTable.de74f3ce.js";
import "./QSelect.cc12aec1.js";
import "./QItemLabel.5598ec43.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.38c8c075.js";
import "./use-fullscreen.9bf1a383.js";
import "./ClosePopup.efb835ab.js";
import "./axios.99921404.js";
import "./StatusTag.9ebd5b62.js";
import "./QBadge.efca824e.js";
import "./debug.972d445d.js";
import "./help.71e55574.js";
import "./vue-i18n.runtime.esm-bundler.a4474ebd.js";
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
