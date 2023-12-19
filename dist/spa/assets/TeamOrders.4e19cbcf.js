import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.7076013f.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.92f7e7d0.js";
import "./QTd.e1b0dab2.js";
import "./QItemSection.8b01430a.js";
import "./QList.1a5fa9eb.js";
import "./QMenu.644c291b.js";
import "./selection.fe2e2af2.js";
import "./QTable.5758adaa.js";
import "./QMarkupTable.3555bc29.js";
import "./QSelect.40dc1487.js";
import "./QItemLabel.44f2712e.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.807bdfde.js";
import "./use-fullscreen.195c064c.js";
import "./ClosePopup.369888b4.js";
import "./axios.5373cd8f.js";
import "./StatusTag.0a8c7594.js";
import "./QBadge.fb62d1b2.js";
import "./debug.972d445d.js";
import "./help.b2dd441c.js";
import "./vue-i18n.runtime.esm-bundler.4e2f4aca.js";
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
