import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.2e23c345.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.1d2cc295.js";
import "./QTable.405241cd.js";
import "./QList.7e21fa8d.js";
import "./QSelect.96553d0d.js";
import "./QItemSection.bf749560.js";
import "./format.2692d829.js";
import "./QLinearProgress.52573e58.js";
import "./use-fullscreen.40165d21.js";
import "./ClosePopup.bd505eea.js";
import "./axios.91d62303.js";
import "./StatusTag.999e3be3.js";
import "./QBadge.023ce274.js";
import "./debug.805a8aef.js";
import "./help.f0ed8230.js";
import "./vue-i18n.runtime.esm-bundler.e7465ca4.js";
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
