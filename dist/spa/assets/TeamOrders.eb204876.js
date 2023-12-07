import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.44d81c17.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.706d8900.js";
import "./QTd.59a9498f.js";
import "./QItemSection.79ddbbc8.js";
import "./QList.4764cd18.js";
import "./QMenu.90cbb366.js";
import "./selection.5172fb8f.js";
import "./QTable.eca3918d.js";
import "./QMarkupTable.6789e56b.js";
import "./QSelect.e5026263.js";
import "./QItemLabel.31304aca.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f4f78209.js";
import "./use-fullscreen.61e68cb7.js";
import "./ClosePopup.275d9e02.js";
import "./axios.8acee7c7.js";
import "./StatusTag.ddc44ddb.js";
import "./QBadge.89672429.js";
import "./debug.972d445d.js";
import "./help.e2addada.js";
import "./vue-i18n.runtime.esm-bundler.880a6508.js";
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
