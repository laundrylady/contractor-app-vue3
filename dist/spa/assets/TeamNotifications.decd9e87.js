import { _ as _sfc_main$1 } from "./GlobalNotifications.3d9ab2e2.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.09db86c6.js";
import "./QToolbarTitle.7a90d5c5.js";
import "./QTable.ee3cea18.js";
import "./QList.ea43f186.js";
import "./QMarkupTable.319b04dd.js";
import "./QSelect.b914fb42.js";
import "./QItemSection.0ff59c1c.js";
import "./selection.b097d85c.js";
import "./QMenu.f4a75668.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.251b2a6a.js";
import "./use-fullscreen.197d76b4.js";
import "./ClosePopup.a0d8d2e6.js";
import "./axios.a630860f.js";
import "./debug.ffa51329.js";
import "./help.43e74e3a.js";
import "./QBadge.604c1aaa.js";
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
