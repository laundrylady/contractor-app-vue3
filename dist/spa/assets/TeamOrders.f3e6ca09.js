import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.0880525a.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.87bd49b7.js";
import "./QTable.7636d595.js";
import "./QList.f266a7fa.js";
import "./QSelect.90e0e815.js";
import "./QItemSection.0c4c4823.js";
import "./format.c2ffa80c.js";
import "./QLinearProgress.0d78402e.js";
import "./use-fullscreen.030541d6.js";
import "./ClosePopup.62118ff4.js";
import "./axios.dbd6bbec.js";
import "./StatusTag.bca9ba64.js";
import "./QBadge.d1a25657.js";
import "./debug.805a8aef.js";
import "./help.741e177a.js";
import "./vue-i18n.runtime.esm-bundler.ee76c811.js";
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
