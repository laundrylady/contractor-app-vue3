import { _ as _sfc_main$1 } from "./GlobalNotifications.7ba0c1ee.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.915b3663.js";
import "./QToolbarTitle.1d953818.js";
import "./QTd.b87035fb.js";
import "./QTable.469273c0.js";
import "./QList.05360fe2.js";
import "./QMarkupTable.2f0c4770.js";
import "./QSelect.d5393abf.js";
import "./selection.8ca46533.js";
import "./QItemLabel.aa8d2617.js";
import "./QMenu.34b9a770.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.743fa035.js";
import "./use-fullscreen.97e687b3.js";
import "./ClosePopup.269b47c8.js";
import "./axios.c80c70de.js";
import "./debug.972d445d.js";
import "./help.90d28660.js";
import "./QBadge.0d3eb609.js";
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Email Activities", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TeamNotifications",
  props: {
    model: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.model.id ? (openBlock(), createElementBlock("div", _hoisted_1, [
        _hoisted_2,
        createBaseVNode("p", null, "Send an Email or view the history for this " + toDisplayString(_ctx.$t("team.name")) + ".", 1),
        createVNode(_sfc_main$1, {
          notifiable_id: __props.model.id,
          notifiable_type: "Team"
        }, null, 8, ["notifiable_id"])
      ])) : createCommentVNode("", true);
    };
  }
});
export { _sfc_main as default };
