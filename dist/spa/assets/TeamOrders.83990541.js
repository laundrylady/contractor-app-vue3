import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.a6f76bd2.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.2b7cc3d6.js";
import "./QTd.2968ddab.js";
import "./QItemSection.9c3d7843.js";
import "./QList.2b69b949.js";
import "./QMenu.0145b6c6.js";
import "./selection.420c9072.js";
import "./QTable.bf3bc6e4.js";
import "./QMarkupTable.ffd9a811.js";
import "./QSelect.aaf3079d.js";
import "./QItemLabel.224eafd7.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.2df3bb96.js";
import "./use-fullscreen.cbe2040d.js";
import "./ClosePopup.dfe830e5.js";
import "./axios.769c3586.js";
import "./StatusTag.a357de61.js";
import "./QBadge.483f7f81.js";
import "./debug.972d445d.js";
import "./help.f92fd9b7.js";
import "./vue-i18n.runtime.esm-bundler.5bc45cdc.js";
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
