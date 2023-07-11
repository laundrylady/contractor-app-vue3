import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.92522bfc.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.f6249b41.js";
import "./QTable.2592a9a9.js";
import "./QList.2b57c8a0.js";
import "./QSelect.fa7be61a.js";
import "./QItemSection.176f25cc.js";
import "./format.95a2af90.js";
import "./QLinearProgress.bb9ea8fa.js";
import "./use-fullscreen.dd2e5cf3.js";
import "./ClosePopup.56839016.js";
import "./axios.ac6cd416.js";
import "./StatusTag.587dfdad.js";
import "./QBadge.1b11840d.js";
import "./debug.805a8aef.js";
import "./help.a715fe42.js";
import "./vue-i18n.runtime.esm-bundler.76cb78e5.js";
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
