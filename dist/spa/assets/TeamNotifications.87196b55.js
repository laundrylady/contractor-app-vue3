import { _ as _sfc_main$1 } from "./GlobalNotifications.49c959d9.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.f7c5cca4.js";
import "./QToolbarTitle.c9bee88d.js";
import "./QTd.03118bb9.js";
import "./QTable.b79ac7d9.js";
import "./QList.e7b5801a.js";
import "./QMarkupTable.26347b19.js";
import "./QSelect.be0332f1.js";
import "./selection.b82fadea.js";
import "./QItemLabel.2d661f01.js";
import "./QMenu.4f7772b4.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.1ee6ef45.js";
import "./use-fullscreen.412bc2fe.js";
import "./ClosePopup.3c7c27a2.js";
import "./axios.6acdee78.js";
import "./debug.972d445d.js";
import "./help.4b1c8261.js";
import "./QBadge.9cc31ff0.js";
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
