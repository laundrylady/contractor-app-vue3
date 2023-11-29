import { _ as _sfc_main$1 } from "./GlobalNotifications.5bb50ec3.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aj as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.a9e72922.js";
import "./QToolbarTitle.9a813f7f.js";
import "./QTd.c3181d8a.js";
import "./QTable.6e91f24a.js";
import "./QList.45d51efb.js";
import "./QMarkupTable.b8a57a00.js";
import "./QSelect.a2c9b544.js";
import "./QItemSection.2292a67b.js";
import "./QItemLabel.ce5bdc9d.js";
import "./QMenu.c5bf345e.js";
import "./selection.ed28452f.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.6d273969.js";
import "./use-fullscreen.b86b03c4.js";
import "./ClosePopup.66841a52.js";
import "./axios.c72b80e9.js";
import "./debug.972d445d.js";
import "./help.f24c7eca.js";
import "./QBadge.e8ad774a.js";
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
