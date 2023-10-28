import { _ as _sfc_main$1 } from "./GlobalNotifications.e9f7a5ed.js";
import { B as defineComponent, m as openBlock, n as createElementBlock, q as createBaseVNode, aI as toDisplayString, l as createVNode, z as createCommentVNode } from "./index.7ec40092.js";
import "./QToolbarTitle.0c100471.js";
import "./QTd.0e733a29.js";
import "./QTable.15895ac8.js";
import "./QList.e7d813ce.js";
import "./QMarkupTable.57ce616d.js";
import "./QSelect.d358a99f.js";
import "./selection.429c29a9.js";
import "./QItemLabel.27b25cc2.js";
import "./QMenu.6bf17566.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.89c7bf08.js";
import "./use-fullscreen.5d2e127c.js";
import "./ClosePopup.8db8cfae.js";
import "./axios.78c8cc16.js";
import "./debug.972d445d.js";
import "./help.c1e38cd4.js";
import "./QBadge.51ae7d4b.js";
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
