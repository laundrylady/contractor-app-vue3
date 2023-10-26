import { _ as _sfc_main$1 } from "./OrderManagementTeamContractor.ab3162a4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, l as createVNode, z as createCommentVNode, q as createBaseVNode } from "./index.915b3663.js";
import "./QTd.b87035fb.js";
import "./selection.8ca46533.js";
import "./QList.05360fe2.js";
import "./QMenu.34b9a770.js";
import "./QTable.469273c0.js";
import "./QMarkupTable.2f0c4770.js";
import "./QSelect.d5393abf.js";
import "./QItemLabel.aa8d2617.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.743fa035.js";
import "./use-fullscreen.97e687b3.js";
import "./ClosePopup.269b47c8.js";
import "./axios.c80c70de.js";
import "./StatusTag.6737357f.js";
import "./QBadge.0d3eb609.js";
import "./debug.972d445d.js";
import "./help.90d28660.js";
import "./vue-i18n.runtime.esm-bundler.1d3ec9cc.js";
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
