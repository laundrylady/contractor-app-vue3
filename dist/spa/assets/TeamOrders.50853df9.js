import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.d983a685.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.a39d6510.js";
import "./QTd.5b0e2d38.js";
import "./selection.3a148310.js";
import "./QList.ca805a71.js";
import "./QMenu.ab547715.js";
import "./QTable.115b34bd.js";
import "./QMarkupTable.f38b3566.js";
import "./QSelect.c7ca6057.js";
import "./QItemLabel.4f07039d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.c560f653.js";
import "./use-fullscreen.6d1cf35e.js";
import "./ClosePopup.0cbd1328.js";
import "./axios.d8634373.js";
import "./StatusTag.cad49401.js";
import "./QBadge.4a9642d8.js";
import "./debug.972d445d.js";
import "./help.9a327069.js";
import "./vue-i18n.runtime.esm-bundler.ac1ea779.js";
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
