import { _ as _sfc_main$1 } from "./GlobalNotifications.203125f4.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.d3d6e530.js";
import "./QToolbarTitle.e3ebcf73.js";
import "./QTd.297bcb67.js";
import "./QTable.705691e8.js";
import "./QList.1c15f565.js";
import "./QMarkupTable.f60178ce.js";
import "./QSelect.0adb6ca7.js";
import "./QItemSection.0d9defb0.js";
import "./QItemLabel.6e381017.js";
import "./QMenu.14096171.js";
import "./selection.0cf3ea97.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.aab8a3f0.js";
import "./use-fullscreen.857bd7a8.js";
import "./ClosePopup.3139e99b.js";
import "./axios.92d2b7e0.js";
import "./debug.972d445d.js";
import "./help.2050d37a.js";
import "./QBadge.9f7327ae.js";
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
