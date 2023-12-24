import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.5fc41436.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.cdcdcf43.js";
import "./QTd.7b631a04.js";
import "./QItemSection.c0b84010.js";
import "./QList.004b4ede.js";
import "./QMenu.e39b1657.js";
import "./selection.cf93e9cc.js";
import "./QTable.23a5349c.js";
import "./QMarkupTable.73a499e0.js";
import "./QSelect.4b4b676c.js";
import "./QItemLabel.ca428035.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1d8d959a.js";
import "./use-fullscreen.6289219a.js";
import "./ClosePopup.5ff1d715.js";
import "./axios.3c5af50a.js";
import "./StatusTag.6fb0327b.js";
import "./QBadge.938e83c6.js";
import "./debug.972d445d.js";
import "./help.eec7d1f7.js";
import "./vue-i18n.runtime.esm-bundler.06f4724c.js";
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
