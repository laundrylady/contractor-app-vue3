import { _ as _sfc_main$1 } from "./GlobalNotifications.0d637ee6.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.0a73f961.js";
import "./QToolbarTitle.511823f7.js";
import "./QTable.73ac5817.js";
import "./QList.79d8c960.js";
import "./QMarkupTable.02c9a459.js";
import "./QSelect.7216960a.js";
import "./selection.0f6039c3.js";
import "./QItemLabel.12f914f9.js";
import "./QMenu.44421817.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a4b46bca.js";
import "./use-fullscreen.56855fbd.js";
import "./ClosePopup.229e15b7.js";
import "./axios.753e2493.js";
import "./debug.ffa51329.js";
import "./help.4d339a4c.js";
import "./QBadge.5d380769.js";
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
