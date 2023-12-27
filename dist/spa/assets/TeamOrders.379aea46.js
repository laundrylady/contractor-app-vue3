import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.5f8fc77e.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.ceae6044.js";
import "./QTd.853c7085.js";
import "./QItemSection.d03e362e.js";
import "./QList.be12ee7b.js";
import "./QMenu.b7955310.js";
import "./selection.bd6e29b5.js";
import "./QTable.d316a9f8.js";
import "./QMarkupTable.2d701619.js";
import "./QSelect.247a3875.js";
import "./QItemLabel.783f36f9.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.ccc793b3.js";
import "./use-fullscreen.3ad7be70.js";
import "./ClosePopup.c99b0a76.js";
import "./axios.44b80d5e.js";
import "./StatusTag.8777061a.js";
import "./QBadge.2b1f0de5.js";
import "./debug.b9d7424b.js";
import "./help.f2b83c8e.js";
import "./vue-i18n.runtime.esm-bundler.1a2d9ac5.js";
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
