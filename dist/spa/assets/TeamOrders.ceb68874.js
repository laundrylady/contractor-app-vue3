import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.31cbacbe.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.8df0f4ad.js";
import "./QTd.204e79fd.js";
import "./QItemSection.3a9dd665.js";
import "./QList.dc38f62b.js";
import "./QMenu.3de768d1.js";
import "./selection.75c2193f.js";
import "./QTable.e4c678ba.js";
import "./QMarkupTable.d089b46b.js";
import "./QSelect.28512dd8.js";
import "./QItemLabel.bae79bf9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.d0153f86.js";
import "./use-fullscreen.572b6737.js";
import "./ClosePopup.25433e8e.js";
import "./axios.633c6a61.js";
import "./StatusTag.341e22dd.js";
import "./QBadge.8ad379bc.js";
import "./debug.972d445d.js";
import "./help.794a0228.js";
import "./vue-i18n.runtime.esm-bundler.0aefc9a9.js";
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
