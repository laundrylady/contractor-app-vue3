import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.9ca18c81.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, k as createVNode, y as createCommentVNode, p as createBaseVNode } from "./index.b20dbd4f.js";
import "./QTd.5fb1302f.js";
import "./selection.f0b84c25.js";
import "./QList.d6e8eb69.js";
import "./QMenu.2b227eef.js";
import "./QTable.a1976df7.js";
import "./QMarkupTable.0a33ddde.js";
import "./QSelect.7a749a7a.js";
import "./QItemLabel.a8305e21.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.0d8049b5.js";
import "./use-fullscreen.bf8ebfd8.js";
import "./ClosePopup.7e6bdcec.js";
import "./axios.3b176db4.js";
import "./StatusTag.fdd20fd4.js";
import "./QBadge.c7b20ce5.js";
import "./debug.ffa51329.js";
import "./help.64adccec.js";
import "./vue-i18n.runtime.esm-bundler.192ff4a0.js";
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
