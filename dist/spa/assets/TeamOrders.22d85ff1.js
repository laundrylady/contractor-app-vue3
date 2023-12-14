import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.72217583.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.420ace9d.js";
import "./QTd.672bd49a.js";
import "./QItemSection.7138275a.js";
import "./QList.94e247d9.js";
import "./QMenu.51c92bb2.js";
import "./selection.eff96e95.js";
import "./QTable.d0d8ec50.js";
import "./QMarkupTable.c6436ea5.js";
import "./QSelect.291dd209.js";
import "./QItemLabel.4e161513.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.4b68ce73.js";
import "./use-fullscreen.625b7c38.js";
import "./ClosePopup.ecc275ae.js";
import "./axios.feaa9f76.js";
import "./StatusTag.3f4ee5b4.js";
import "./QBadge.d51b7fc9.js";
import "./debug.972d445d.js";
import "./help.f1ea19ef.js";
import "./vue-i18n.runtime.esm-bundler.9da1be35.js";
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
