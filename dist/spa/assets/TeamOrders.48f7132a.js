import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.bdc6dc4b.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.109aab81.js";
import "./QTd.b85e2a2f.js";
import "./QItemSection.3d6683d4.js";
import "./QList.69f15000.js";
import "./QMenu.48463e4e.js";
import "./selection.678cafa9.js";
import "./QTable.7e388159.js";
import "./QMarkupTable.b44db94c.js";
import "./QSelect.2ac7a0e8.js";
import "./QItemLabel.6de4410d.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.ea084d2b.js";
import "./use-fullscreen.11fc1fcf.js";
import "./ClosePopup.9895b2d3.js";
import "./axios.122a6dc1.js";
import "./StatusTag.f64fcc8c.js";
import "./QBadge.2d4856a0.js";
import "./debug.b9d7424b.js";
import "./help.083b28ce.js";
import "./vue-i18n.runtime.esm-bundler.ca88c4c6.js";
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
