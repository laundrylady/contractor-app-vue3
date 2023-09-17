import { _ as _sfc_main$1 } from "./GlobalNotifications.92a2d5e2.js";
import { A as defineComponent, l as openBlock, m as createElementBlock, p as createBaseVNode, aH as toDisplayString, k as createVNode, y as createCommentVNode } from "./index.f00b5063.js";
import "./QToolbarTitle.d70355f5.js";
import "./QTable.a69612ff.js";
import "./QList.51c80329.js";
import "./QMarkupTable.769ff38d.js";
import "./QSelect.728b69b4.js";
import "./selection.4a285e86.js";
import "./QItemLabel.187da5b1.js";
import "./QMenu.92239622.js";
import "./rtl.b51694b1.js";
import "./format.3e32b8d9.js";
import "./QLinearProgress.f6a2aa50.js";
import "./use-fullscreen.6569d1c9.js";
import "./ClosePopup.e337ba20.js";
import "./axios.8666242f.js";
import "./debug.ffa51329.js";
import "./help.c302d4f4.js";
import "./QBadge.a713ce6e.js";
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
