import { _ as _sfc_main$1 } from "./GlobalNotifications.ced0ac09.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.bb568279.js";
import "./QToolbarTitle.1688f162.js";
import "./QTd.28785378.js";
import "./QTable.b5ba0c51.js";
import "./QList.420e6329.js";
import "./QMarkupTable.e87d5672.js";
import "./QSelect.9d4df987.js";
import "./selection.419fc148.js";
import "./QItemLabel.15ac7203.js";
import "./QMenu.00cf9cb3.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.39e4f86d.js";
import "./use-fullscreen.0514a8e0.js";
import "./ClosePopup.94df672d.js";
import "./axios.96e782ce.js";
import "./debug.972d445d.js";
import "./help.2f0ec940.js";
import "./QBadge.6a33f5f6.js";
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
