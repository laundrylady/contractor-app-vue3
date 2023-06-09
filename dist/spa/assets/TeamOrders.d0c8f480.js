import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a861bfce.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.df648268.js";
import "./QTable.91edf465.js";
import "./QList.5de97230.js";
import "./QSelect.261f3678.js";
import "./QItemSection.69a1ed09.js";
import "./format.36ec1428.js";
import "./QLinearProgress.f6412a61.js";
import "./use-fullscreen.497e193b.js";
import "./ClosePopup.407892a4.js";
import "./axios.954307d5.js";
import "./StatusTag.dd1e4d46.js";
import "./QBadge.2155e69c.js";
import "./debug.805a8aef.js";
import "./help.0d5056b8.js";
import "./vue-i18n.runtime.esm-bundler.c252a67d.js";
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
