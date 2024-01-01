import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.bc1b1d26.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.7dc3575e.js";
import "./QTd.a2943cc5.js";
import "./QItemSection.9fd3d4de.js";
import "./QList.1b05cca7.js";
import "./QMenu.8461399f.js";
import "./selection.efa8343e.js";
import "./QTable.b6aca402.js";
import "./QMarkupTable.6ae5d034.js";
import "./QSelect.1ac73f3f.js";
import "./QItemLabel.62281547.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.e3921e7a.js";
import "./use-fullscreen.067d6d97.js";
import "./ClosePopup.bd216dea.js";
import "./axios.f968c8b5.js";
import "./StatusTag.364d5b22.js";
import "./QBadge.725c7422.js";
import "./debug.b9d7424b.js";
import "./help.bc4499e5.js";
import "./vue-i18n.runtime.esm-bundler.e7fce691.js";
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
