import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a539dc74.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.e689b3a4.js";
import "./QTd.1fcacd53.js";
import "./QItemSection.66a439b4.js";
import "./QList.67f13691.js";
import "./QMenu.f2d7af9d.js";
import "./selection.8bb6db55.js";
import "./QTable.ed8f700a.js";
import "./QMarkupTable.014a3cb4.js";
import "./QSelect.feaeb567.js";
import "./QItemLabel.bab8af8b.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f4c68dee.js";
import "./use-fullscreen.4c691057.js";
import "./ClosePopup.68362c44.js";
import "./axios.0186e3dc.js";
import "./StatusTag.dd29766b.js";
import "./QBadge.d81d74ef.js";
import "./debug.972d445d.js";
import "./help.3662df67.js";
import "./vue-i18n.runtime.esm-bundler.de6e7eca.js";
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
