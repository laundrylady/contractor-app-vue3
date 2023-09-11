import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.935b6109.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.9049e2bf.js";
import "./QTable.402378a4.js";
import "./QList.f208e8e5.js";
import "./QMarkupTable.f27342c3.js";
import "./QSelect.b1afe4a4.js";
import "./selection.2c513c02.js";
import "./QItemLabel.bdaf797d.js";
import "./QMenu.670043f4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.3ff3411e.js";
import "./use-fullscreen.b8f5d173.js";
import "./ClosePopup.9f3be768.js";
import "./axios.8996a507.js";
import "./StatusTag.d95870b4.js";
import "./QBadge.6b4317e4.js";
import "./debug.ffa51329.js";
import "./help.344bce22.js";
import "./vue-i18n.runtime.esm-bundler.2d8fcc0a.js";
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
