import { _ as _sfc_main$1 } from "./GlobalNotifications.7806ed56.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.2b7cc3d6.js";
import "./QToolbarTitle.d695b459.js";
import "./QTd.2968ddab.js";
import "./QTable.bf3bc6e4.js";
import "./QList.2b69b949.js";
import "./QMarkupTable.ffd9a811.js";
import "./QSelect.aaf3079d.js";
import "./QItemSection.9c3d7843.js";
import "./QItemLabel.224eafd7.js";
import "./QMenu.0145b6c6.js";
import "./selection.420c9072.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.2df3bb96.js";
import "./use-fullscreen.cbe2040d.js";
import "./ClosePopup.dfe830e5.js";
import "./axios.769c3586.js";
import "./debug.972d445d.js";
import "./help.f92fd9b7.js";
import "./QBadge.483f7f81.js";
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
