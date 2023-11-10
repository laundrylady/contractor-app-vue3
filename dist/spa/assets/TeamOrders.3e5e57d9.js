import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.72001b95.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.463e86f0.js";
import "./QTd.5503f335.js";
import "./selection.3e27cc6f.js";
import "./QList.dc76fc06.js";
import "./QMenu.f6853d7e.js";
import "./QTable.15926422.js";
import "./QMarkupTable.19297c54.js";
import "./QSelect.bb0d9cdf.js";
import "./QItemLabel.010aa2a3.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.e8485390.js";
import "./use-fullscreen.c182fc2a.js";
import "./ClosePopup.e2ee84f0.js";
import "./axios.a2a34ccc.js";
import "./StatusTag.6f72eb10.js";
import "./QBadge.64ff0bbe.js";
import "./debug.972d445d.js";
import "./help.1a6aa2eb.js";
import "./vue-i18n.runtime.esm-bundler.f63b676c.js";
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
