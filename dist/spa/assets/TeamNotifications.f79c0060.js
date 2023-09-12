import { _ as _sfc_main$1 } from "./GlobalNotifications.2ff2a289.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.b04b1049.js";
import "./QToolbarTitle.5cee1261.js";
import "./QTable.5dcfb98e.js";
import "./QList.02c43971.js";
import "./QMarkupTable.13166594.js";
import "./QSelect.0f362143.js";
import "./selection.347263e5.js";
import "./QItemLabel.21af0eb9.js";
import "./QMenu.53748de8.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.b8803ded.js";
import "./use-fullscreen.db269951.js";
import "./ClosePopup.6677deda.js";
import "./axios.aaf6f9f0.js";
import "./debug.ffa51329.js";
import "./help.3cb757e9.js";
import "./QBadge.82ef3b48.js";
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
