import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.e0a4172a.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.d121ec5d.js";
import "./QTd.f8d840dc.js";
import "./QItemSection.0262b439.js";
import "./QList.bf1f960c.js";
import "./QMenu.e4b54bdf.js";
import "./selection.111dbff5.js";
import "./QTable.5f1869b9.js";
import "./QMarkupTable.a06f2dce.js";
import "./QSelect.948a0151.js";
import "./QItemLabel.38ead7bb.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.83df8c72.js";
import "./use-fullscreen.c3a4b878.js";
import "./ClosePopup.fb2f9dc0.js";
import "./axios.25c40239.js";
import "./StatusTag.5bbcfaa4.js";
import "./QBadge.2ea68c47.js";
import "./debug.972d445d.js";
import "./help.a8cc6f8b.js";
import "./vue-i18n.runtime.esm-bundler.5298b7c0.js";
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
