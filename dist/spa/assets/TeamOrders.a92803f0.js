import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.898c18a6.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.6a0e49ef.js";
import "./QTd.6637a8a6.js";
import "./QItemSection.322b798b.js";
import "./QList.6c3ab040.js";
import "./QMenu.4cdb6815.js";
import "./selection.81608666.js";
import "./QTable.773d842c.js";
import "./QMarkupTable.9475dbc2.js";
import "./QSelect.670b73c2.js";
import "./QItemLabel.c30e8810.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.44d5e5bc.js";
import "./use-fullscreen.74d30cf7.js";
import "./ClosePopup.73b430d0.js";
import "./axios.fb5a1a1c.js";
import "./StatusTag.ca032615.js";
import "./QBadge.9039148c.js";
import "./debug.972d445d.js";
import "./help.01f01c96.js";
import "./vue-i18n.runtime.esm-bundler.48dd2d12.js";
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
