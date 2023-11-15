import { _ as _sfc_main$1 } from "./GlobalNotifications.ddf77eb0.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.96a3f834.js";
import "./QToolbarTitle.e1f2cc02.js";
import "./QTd.b1497b41.js";
import "./QTable.118042b4.js";
import "./QList.b5a66286.js";
import "./QMarkupTable.c47dbd7d.js";
import "./QSelect.02973d19.js";
import "./selection.1e405919.js";
import "./QItemLabel.5d90c580.js";
import "./QMenu.bc1b86fc.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.a85f4616.js";
import "./use-fullscreen.8d093f29.js";
import "./ClosePopup.a29420e5.js";
import "./axios.be3a5f7e.js";
import "./debug.972d445d.js";
import "./help.076bc519.js";
import "./QBadge.3302adab.js";
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
