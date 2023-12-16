import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.81134b20.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.c5118e29.js";
import "./QTd.e19a1fea.js";
import "./QItemSection.f83fd0c5.js";
import "./QList.98c06205.js";
import "./QMenu.9ddada38.js";
import "./selection.7210b64a.js";
import "./QTable.f660c723.js";
import "./QMarkupTable.fc2f95c8.js";
import "./QSelect.a6958ac0.js";
import "./QItemLabel.8416713a.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a2cff885.js";
import "./use-fullscreen.ac4597f7.js";
import "./ClosePopup.b1490340.js";
import "./axios.4b346699.js";
import "./StatusTag.ceb3dd51.js";
import "./QBadge.041f0e72.js";
import "./debug.972d445d.js";
import "./help.3ac2b17c.js";
import "./vue-i18n.runtime.esm-bundler.263b1438.js";
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
