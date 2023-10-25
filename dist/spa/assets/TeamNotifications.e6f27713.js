import { _ as _sfc_main$1 } from "./GlobalNotifications.00ec96b1.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.fc5b7253.js";
import "./QToolbarTitle.6482c6d1.js";
import "./QTd.976a0130.js";
import "./QTable.557ac89e.js";
import "./QList.0970dba8.js";
import "./QMarkupTable.04cfc86d.js";
import "./QSelect.6ace0b26.js";
import "./selection.5c80716e.js";
import "./QItemLabel.a0d0e7dd.js";
import "./QMenu.e4d44051.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.08b85f9b.js";
import "./use-fullscreen.7e04aacc.js";
import "./ClosePopup.c982e528.js";
import "./axios.1c53bd8d.js";
import "./debug.972d445d.js";
import "./help.4fde57f5.js";
import "./QBadge.f7f5505f.js";
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
