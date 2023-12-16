import { _ as _sfc_main$1 } from "./GlobalNotifications.702dc9b4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.6a5c0810.js";
import "./QToolbarTitle.b7277457.js";
import "./QTd.6fc409ec.js";
import "./QTable.a64cb520.js";
import "./QList.969289e2.js";
import "./QMarkupTable.047f98d8.js";
import "./QSelect.fde53a09.js";
import "./QItemSection.cb2915ec.js";
import "./QItemLabel.64d93eb6.js";
import "./QMenu.49b63711.js";
import "./selection.2a9bbdda.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.85cd81a0.js";
import "./use-fullscreen.205642cc.js";
import "./ClosePopup.22eaac01.js";
import "./axios.83cf9320.js";
import "./debug.972d445d.js";
import "./help.4330a8b0.js";
import "./QBadge.da8585b9.js";
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
